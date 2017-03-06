'use strict';

//
// Map all json search properties to the Code Model properties
//
function mapCode(code) {
  const _source = code._source;

  return {
    organization: _source.organization.organization,
    origin: _source.origin,
    project_name: _source.project_name,
    language: _source.language,
    metrics: _source.metrics,
    updatedAt: _source.updated_at,
    id: code._id,
  };
}

function getSonarHealthMetrics(repo) {
  let metrics = {};
  if (repo._source.metrics) {
    metrics = repo._source.metrics;
  }
  return metrics;
}
//
// Transform all Project data from the search service to the needs of the Project Model.
//
function transform(projects) {
  const transformedProjects = [];
  if (!projects) {
    return transformedProjects;
  }

  // This ECMAScript 6 feature is supported but not all ES6 features are.
  // noinspection JSAnnotator
  for (const p of projects) {
    transformedProjects.push(mapCode(p));
  }
  return transformedProjects;
}

function computeBugsAndVulnerabilities(metrics){
  var bugs_vulnerabilities = 0;
  var metric_string = JSON.stringify(metrics['bugs'])
  if(metrics['bugs']){
    var bugs = JSON.parse(JSON.stringify(metrics['bugs']));
    bugs_vulnerabilities = bugs_vulnerabilities + parseInt(bugs['val']);
  }
  if(metrics['vulnerabilities']){
    var vulnerabilities = JSON.parse(JSON.stringify(metrics['vulnerabilities']));
    bugs_vulnerabilities = bugs_vulnerabilities + parseInt(vulnerabilities['val']);
  }
  return bugs_vulnerabilities
}


function processTechnicalDebt(repos){
  var technical_debt = 0;
  for (var repo of repos.hits.hits){
    if(repo._source.project_health_metrics){
      var metric = repo._source.project_health_metrics;
      if(metric.sqale_index){
        technical_debt = technical_debt + parseInt(metric.sqale_index.val);
      }
    }
  }
  return technical_debt;
}

function processMetricsAggregation(repos){
  var metrics_summary = {"releasibility":{"OK":0,"WARN":0,"ERROR":0},"reliability":{"A":0,"B":0,"C":0,"D":0,"E":0},"security":{"A":0,"B":0,"C":0,"D":0,"E":0},"maintainability":{"A":0,"B":0,"C":0,"D":0,"E":0}};
  for (var repo of repos.hits.hits){
    if(repo._source.project_health_metrics){
      var metric = repo._source.project_health_metrics;
      if(metric.security_rating){
        var metric_value  = metric.security_rating.val;
        switch (metric_value) {
            case 1:
                metrics_summary.security["A"] = parseInt(metrics_summary.security["A"]) + 1;
                break;
            case 2:
                metrics_summary.security["B"] = parseInt(metrics_summary.security["B"]) + 1;
                break;
            case 3:
                metrics_summary.security["C"] = parseInt(metrics_summary.security["C"]) + 1;
                break;
            case 4:
                metrics_summary.security["D"] = parseInt(metrics_summary.security["D"]) + 1;
                break;
            case 5:
                metrics_summary.security["E"] = parseInt(metrics_summary.security["E"]) + 1;
                break;
        }
      }
      if(metric.reliability_rating){
        var metric_value  = metric.reliability_rating.val;
        switch (metric_value) {
            case 1:
                metrics_summary.reliability["A"] = parseInt(metrics_summary.reliability["A"]) + 1;
                break;
            case 2:
                metrics_summary.reliability["B"] = parseInt(metrics_summary.reliability["B"]) + 1;
                break;
            case 3:
                metrics_summary.reliability["C"] = parseInt(metrics_summary.reliability["C"]) + 1;
                break;
            case 4:
                metrics_summary.reliability["D"] = parseInt(metrics_summary.reliability["D"]) + 1;
                break;
            case 5:
                metrics_summary.reliability["E"] = parseInt(metrics_summary.reliability["E"]) + 1;
                break;
        }
      }
      if(metric.sqale_rating){
        var metric_value  = metric.sqale_rating.val;
        switch (metric_value) {
            case 1:
                metrics_summary.maintainability["A"] = parseInt(metrics_summary.maintainability["A"]) + 1;
                break;
            case 2:
                metrics_summary.maintainability["B"] = parseInt(metrics_summary.maintainability["B"]) + 1;
                break;
            case 3:
                metrics_summary.maintainability["C"] = parseInt(metrics_summary.maintainability["C"]) + 1;
                break;
            case 4:
                metrics_summary.maintainability["D"] = parseInt(metrics_summary.maintainability["D"]) + 1;
                break;
            case 5:
                metrics_summary.maintainability["E"] = parseInt(metrics_summary.maintainability["E"]) + 1;
                break;
        }
      }

      if(metric.sqale_rating){
        var metric_value  = metric.sqale_rating.val;
        switch (metric_value) {
            case 1:
                metrics_summary.maintainability["A"] = parseInt(metrics_summary.maintainability["A"]) + 1;
                break;
            case 2:
                metrics_summary.maintainability["B"] = parseInt(metrics_summary.maintainability["B"]) + 1;
                break;
            case 3:
                metrics_summary.maintainability["C"] = parseInt(metrics_summary.maintainability["C"]) + 1;
                break;
            case 4:
                metrics_summary.maintainability["D"] = parseInt(metrics_summary.maintainability["D"]) + 1;
                break;
            case 5:
                metrics_summary.maintainability["E"] = parseInt(metrics_summary.maintainability["E"]) + 1;
                break;
        }
      }

      if(metric.qualitygates){
        var metric_value  = metric.qualitygates.projectStatus.status;
        switch (metric_value) {
            case "OK":
                metrics_summary.releasibility["OK"] = parseInt(metrics_summary.releasibility["OK"]) + 1;
                break;
            case "WARN":
                metrics_summary.releasibility["WARN"] = parseInt(metrics_summary.releasibility["WARN"]) + 1;
                break;
            case "ERROR":
                metrics_summary.releasibility["ERROR"] = parseInt(metrics_summary.releasibility["ERROR"]) + 1;
                break;
        }
      }

    }
  }
      return metrics_summary
}


function processLanguageStat(repos){
  var hits = repos.hits.hits;
  var lang_summary = [];
  var language_counts_stat = {"Java":0,"JavaScript":0,"Go":0,"CSS":0,"Python":0,"CoffeeScript":0,"Shell":0,"Ruby":0,
  "Puppet":0,"HTML":0,"Swift":0,"C":0,"C++":0,"C-Sharp":0,"PHP":0,"XML":0,"Objective-C":0,"Visual Basic 6":0,"VB.NET":0,
  "XSLT":0,"Groovy":0,"C#":0,"Clojure":0,"Nginx":0,"TypeScript":0,"Scala":0};
  var language_percentage_stat = {"Java":0,"JavaScript":0,"Go":0,"CSS":0,"Python":0,"CoffeeScript":0,"Shell":0,"Ruby":0,
  "Puppet":0,"HTML":0,"Swift":0,"C":0,"C++":0,"C-Sharp":0,"PHP":0,"XML":0,"Objective-C":0,"Visual Basic 6":0,"VB.NET":0,
  "XSLT":0,"Groovy":0,"C#":0,"Clojure":0,"Nginx":0,"TypeScript":0,"Scala":0};
  var total_count = 0;
  for(var repo of repos.hits.hits){
      if(repo._source.language != null){
      var lang = repo._source.language;
      language_counts_stat[lang] = Number(language_counts_stat[lang] + 1);
    }
  }
  for (var lang in language_counts_stat) {
        if(!(language_counts_stat[lang] != language_counts_stat[lang])){
          total_count = total_count + language_counts_stat[lang];
        }
    }
  for(var lang in language_percentage_stat){
    var calculated_percentage = parseFloat(language_counts_stat[lang]/(total_count))*100
    language_percentage_stat[lang] = calculated_percentage.toFixed(2) + "%";
  }
    lang_summary.push(language_counts_stat);
    lang_summary.push(language_percentage_stat);
    return lang_summary;
  }

function processEnterpriseInsight(repos) {
  var repos_summary = {};
  var bugs_vulnerabilities = 0;
  var language_counts_stat = {};
  var language_percentage_stat = language_percentage_stat;
  var lang_summary = processLanguageStat(repos);
  var metrics_summary = processMetricsAggregation(repos);
  var technical_debt = processTechnicalDebt(repos);
  for(var repo of repos.hits.hits){
    let metrics = getSonarHealthMetrics(repo)
    bugs_vulnerabilities = bugs_vulnerabilities + computeBugsAndVulnerabilities(metrics)
  }
  repos_summary = {
    number_of_projects:repos.hits.total,
    bugs_vulnerabilities:bugs_vulnerabilities,
    technical_debt:technical_debt,
    language_counts_stat:lang_summary[0],
    language_percentage_stat:lang_summary[1],
    metrics_summary:metrics_summary

  }

  return repos_summary;
}


//
// Project API
// READ ONLY
//
module.exports = function (Code) {
  Code.afterRemote('find', (ctx, code, next) => {
    ctx.result = transform(ctx.result.hits.hits);
    next();
  });


Code.afterRemote('findEnterpriseInsight', (ctx, code, next) => {
  ctx.result = processEnterpriseInsight(ctx.result);
  next();
});
  // ================================
  // Disable all writable REST Operations per Loopback 2.x API
  // ================================

  Code.disableRemoteMethod('create', true);
  Code.disableRemoteMethod('upsert', true);
  Code.disableRemoteMethod('patchOrCreate', true);
  Code.disableRemoteMethod('deleteById', true);
  Code.disableRemoteMethod('replaceOrCreate', true);
  Code.disableRemoteMethod('prototype.updateAttributes', true);
  Code.disableRemoteMethod('createChangeStream', true);
  Code.disableRemoteMethod('updateAll', true);
  Code.disableRemoteMethod('replaceById', true);
  Code.disableRemoteMethod('invoke', true);
};

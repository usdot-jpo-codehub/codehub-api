module.exports = function(Project) {
function transform(projarry){
  var projs = [];
  for(proj of projarry){
    projs.push(
      {
        "project_name":proj._source.project_name,
        "organization":proj._source.organization,
        "full_name":proj._source.full_name,
        "project_description":proj._source.project_description,
        "repository":proj._source.repository,
        "forks":proj._source.forks,
        "commits":proj._source.commits,
        "email":proj._source.email,
        "language":proj._source.language,
        "content":proj._source.content,
        "readme_url":proj._source.readme_url,
        "contributors":proj._source.contributors,
        "stars":proj._source.stars,
        "watchers":proj._source.watchers,
        "releases":proj._source.releases,
        "rank":proj._source.rank,
        "id":proj._id
      });
  }
  return projs;
}

    function decodePomContent(content){
      var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
      var decodedString = Base64.decode(content);
      var parseString = require('xml2js').parseString;
      var transformedContent = [];
      var dependencyOfProject = [];
      parseString(decodedString, function (err, result) {
          transformedContent =  result.project.dependencies[0].dependency;
      });
        for(var dependency of transformedContent){
          console.log(dependency);
          dependencyOfProject.push({'groupId':dependency.groupId[0], 'artifactId':dependency.artifactId[0],'version':dependency.version[0]});
        }
        return dependencyOfProject;
    }

    Project.afterRemote('find', function(ctx, project, next) {
      ctx.result = transform(ctx.result.hits.hits);
      next();
    });

    Project.afterRemote('findProjectDependencies', function(ctx, project, next) {
      ctx.result = decodePomContent(ctx.result.content);
      next();
    });

    Project.afterRemote('findTestEs', function(ctx, project, next) {
        ctx.result = transform(ctx.result.hits.hits);
        next();
      });

    Project.afterRemote('findSuggestion', function(ctx, project, next) {
        ctx.result = ctx.result['term-suggest'][0].options;
        next();
      });
    Project.afterRemote('findSimilarProjects', function(ctx, project, next) {
          var proj_id = ctx.args.id;
          ctx.result = ctx.result[proj_id];
          next();
        });
    Project.afterRemote('findById', function(ctx, project, next) {
        ctx.result = transform(ctx.result.hits.hits)[0];
        next();
      });
     Project.afterRemote('search', function(ctx, project, next) {
         ctx.result = transform(ctx.result.hits.hits);
         next();
       });

     Project.afterRemote('searchByPopularity', function(ctx, Project, next) {
       ctx.result = transform(ctx.result.hits.hits);
       next();
     });

};

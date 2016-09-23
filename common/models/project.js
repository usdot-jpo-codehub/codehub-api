'use strict';

// ================================
// Support Functions
// ================================

// TODO: Move functions into a Project Object or Transform Object so this interface stays clean.  Also testing
// improves with objects.

//
// Map all json search properties to the Project Model properties
//
function mapProject(project) {
  const _source = project._source;

  return {
    organization: _source.organization,
    organizationUrl: _source.organization_url,
    organizationType: _source.org_type,
    organizationAvatarUrl: _source.org_avatar_url,
    origin: _source.origin,
    project_name: _source.project_name,
    full_name: _source.full_name,
    project_description: _source.project_description,
    repository: _source.repository,
    forks: _source.forks,
    commits: _source.commits,
    email: _source.email,
    language: _source.language,
    languages: _source.languages,
    content: _source.content,
    readme_url: _source.readme_url,
    contributors: _source.contributors,
    contributors_list: _source.contributors_list,
    stars: _source.stars,
    watchers: _source.watchers,
    releases: _source.releases,
    rank: _source.rank,
    repositoryUrl: _source.repository_url,
    updatedAt: _source.updated_at,
    id: project._id,
  };
}

//
// Add any project code dependencies a project may have.
// If there are then simply transform the existing results and
//
function addComponentDependencies(repo) {
  const dependencies = [];
  if (!repo._source.componentDependencies) {
    return mapProject(repo);
  }

  // noinspection JSAnnotator
  for (const dependency of repo._source.componentDependencies) {
    dependencies.push(dependency);
  }
  const results = mapProject(repo);
  results.componentDependencies = dependencies;
  return results;
}

function getSonarHealthMetrics(repo) {
  let metrics = [];
  if (repo._source.project_health_metrics) {
    metrics = repo._source.project_health_metrics;
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
    transformedProjects.push(mapProject(p));
  }
  return transformedProjects;
}

//
// Project API
// READ ONLY
//
module.exports = function (Project) {
  Project.afterRemote('find', (ctx, project, next) => {
    ctx.result = transform(ctx.result.hits.hits);
    next();
  });

  // TODO:  Move to another API.  Not Project Specific
  Project.afterRemote('findSuggestions', (ctx, project, next) => {
    ctx.result = ctx.result['term-suggest'][0].options;
    next();
  });

  // TODO: Rename API and consider a different style PATH or move to new home altogether.
  // /projects/{:id}/similar or /recommend/projects/{:id} The latter allows for more 'recommend' type operations
  // across projects and other concepts.  More cohesion for a similar concept.
  Project.afterRemote('findSimilarProjects', (ctx, project, next) => {
    const projID = ctx.args.id;
    ctx.result = ctx.result[projID];
    next();
  });

  // TODO: Rethink home for Project Dependencies and how they are retrieved.
  Project.afterRemote('findById', (ctx, project, next) => {
    ctx.result = addComponentDependencies(ctx.result);
    next();
  });

  // TODO: Rethink Search API Home
  Project.afterRemote('search', (ctx, project, next) => {
    ctx.result = transform(ctx.result.hits.hits);
    next();
  });

  Project.afterRemote('findSonarHealthMetrics', (ctx, project, next) => {
    ctx.result = getSonarHealthMetrics(ctx.result);
    next();
  });

  // TODO:  API needs rework.  Either rethink its home or fix its name/path
  Project.afterRemote('findPopular', (ctx, project, next) => {
    ctx.result = transform(ctx.result.hits.hits);
    next();
  });

  // ================================
  // Disable all writable REST Operations per Loopback 2.x API
  // ================================

  Project.disableRemoteMethod('create', true);
  Project.disableRemoteMethod('upsert', true);
  Project.disableRemoteMethod('patchOrCreate', true);
  Project.disableRemoteMethod('deleteById', true);
  Project.disableRemoteMethod('replaceOrCreate', true);
  Project.disableRemoteMethod('prototype.updateAttributes', true);
  Project.disableRemoteMethod('createChangeStream', true);
  Project.disableRemoteMethod('updateAll', true);
  Project.disableRemoteMethod('replaceById', true);
  Project.disableRemoteMethod('invoke', true);
};

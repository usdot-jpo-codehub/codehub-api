
//
// Project API
// READ ONLY
//
module.exports = function(Project) {

  Project.afterRemote('find', function(ctx, project, next) {
    ctx.result = transform(ctx.result.hits.hits);
    next();
  });

  // TODO:  Move to another API.  Not Project Specific
  Project.afterRemote('findSuggestions', function(ctx, project, next) {
    ctx.result = ctx.result['term-suggest'][0].options;
    next();
  });

  // TODO: Rename API and consider a different style PATH or move to new home altogether.
  // /projects/{:id}/similar or /recommend/projects/{:id} The latter allows for more 'recommend' type operations
  // across projects and other concepts.  More cohesion for a similar concept.
  Project.afterRemote('findSimilarProjects', function(ctx, project, next) {
    var proj_id = ctx.args.id;
    ctx.result = ctx.result[proj_id];
    next();
  });

  // TODO: Rethink home for Project Dependencies and how they are retrieved.
  Project.afterRemote('findById', function(ctx, project, next) {
    ctx.result = addCodeDependencies(ctx.result)
    next();
  });

  // TODO: Rethink Search API Home
  Project.afterRemote('search', function(ctx, project, next) {
    ctx.result = transform(ctx.result.hits.hits);
    next();
  });

  // TODO:  API needs rework.  Either rethink its home or fix its name/path
  Project.afterRemote('findPopular', function(ctx, Project, next) {
    ctx.result = transform(ctx.result.hits.hits);
    next();
  });

  // ================================
  // Support Functions
  // ================================

  // TODO: Move functions into a Project Object or Transform Object so this interface stays clean.  Also testing
  // improves with objects.

  //
  // Add any project code dependencies a project may have.
  // If there are then simply transform the existing results and
  //
  function addCodeDependencies(repo){
    var dependencies = []
    if(!repo['_source']['project_dependency']) {
      return mapProject(repo);
    }

    //noinspection JSAnnotator
    for(var dependency of repo['_source']['project_dependency']) {
      dependencies.push(dependency)
    }
    var results = mapProject(repo)
    results['project_dependency'] = dependencies
    return results;
  }

  //
  // Transform all Project data from the search service to the needs of the Project Model.
  //
  function transform(projects){
    var transformedProjects = [];
    if(!projects) {
      return transformedProjects;
    }

    // This ECMAScript 6 feature is supported but not all ES6 features are.
    //noinspection JSAnnotator
    for(var p of projects){
      transformedProjects.push(mapProject(p));
    }
    return transformedProjects;
  }

  //
  // Map all json search properties to the Project Model properties
  //
  function mapProject(project){
    const _source = project._source;

    return {
      "project_name": _source['project_name'],
      "organization": _source.organization,
      "full_name": _source.full_name,
      "project_description": _source.project_description,
      "repository": _source.repository,
      "forks": _source.forks,
      "commits": _source.commits,
      "email": _source.email,
      "language": _source.language,
      "content": _source.content,
      "readme_url": _source.readme_url,
      "contributors": _source.contributors,
      "contributors_list": _source.contributors_list,
      "stars": _source.stars,
      "watchers": _source.watchers,
      "releases": _source.releases,
      "rank": _source.rank,
      "id": project._id
    };
  }

  // ================================
  // Disable all writable REST Operations per Loopback 2.x API
  // ================================

  Project.disableRemoteMethod("create", true);
  Project.disableRemoteMethod("upsert", true);
  Project.disableRemoteMethod("patchOrCreate", true);
  Project.disableRemoteMethod("deleteById", true);
  Project.disableRemoteMethod("replaceOrCreate", true);
  Project.disableRemoteMethod("prototype.updateAttributes", true);
  Project.disableRemoteMethod("createChangeStream", true);
  Project.disableRemoteMethod("updateAll", true);
  Project.disableRemoteMethod("replaceById", true);
  Project.disableRemoteMethod("invoke", true);
};

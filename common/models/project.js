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

  Project.afterRemote('find', function(ctx, project, next) {
      ctx.result = transform(ctx.result.hits.hits);
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

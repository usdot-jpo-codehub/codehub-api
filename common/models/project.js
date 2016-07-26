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

function transformProject(proj){
    var transformed_proj =
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
        "watchers":proj._source.watchers,
        "releases":proj._source.releases,
        "rank":proj._source.rank,
        "id":proj._id
      };
  return transformed_proj;
}

  Project.afterRemote('find', function(ctx, project, next) {
      ctx.result = transform(ctx.result.hits.hits);
      console.log()
      next();
    });

    Project.afterRemote('findById', function(ctx, project, next) {
        ctx.result = transformProject(ctx.result.hits.hits[0]);
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

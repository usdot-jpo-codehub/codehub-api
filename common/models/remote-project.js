module.exports = function(RemoteProject) {

   RemoteProject.afterRemote('find', function(ctx, RemoteProject, next) {
     var projs = [];
     for(proj of ctx.result.hits.hits){
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
           "watchers":proj._source.watchers,
           "releases":proj._source.releases,
           "rank":proj._source.rank,
           "id":proj._id
         });
     }
     ctx.result = {
       projects: projs
     };
     next();
   });
};

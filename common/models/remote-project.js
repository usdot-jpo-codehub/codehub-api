module.exports = function(RemoteProject) {

   RemoteProject.afterRemote('searchPopular', function(ctx, RemoteProject, next) {
     var projs = [];
     for(proj of ctx.result.hits.hits){
       projs.push({"name":proj._source.name,"organization":proj._source.organization,"full_name":proj._source.full_name,
       "description":proj._source.description,"forks":proj._source.forks,"commits":proj._source.commits,
       "email":proj._source.email, "type":proj._source.type, "language":proj._source.language,"html_url":proj._source.html_url,
       "readme_url":proj._source.readme_url,"watchers":proj._source.watchers,"releases":proj._source.releases,
       "total_score":proj._source._score,"type":proj._type,"id":proj._id});
     }
     ctx.result = {
       projects: projs
     };
     next();
   });

  RemoteProject.remoteMethod(
    'searchPopular',
    {
      http: {path: '/', verb: 'get'},
      returns: {arg: 'projects', type: 'string'}
    }
  );
};

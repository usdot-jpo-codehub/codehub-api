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

//
// Project API
// READ ONLY
//
module.exports = function (Code) {
  Code.afterRemote('find', (ctx, code, next) => {
    ctx.result = transform(ctx.result.hits.hits);
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

/*

  Operation Hooks: https://docs.strongloop.com/display/public/LB/Operation+hooks

  Project is a PersistentModel working off a DB. Both Operation and Remote hooks work.

 */

module.exports = function(Project) {
  Project.observe("access", function(ctx, next) {
    console.log('Project access called...');
    next();
  });

  Project.beforeRemote("find", function(ctx, Project, next) {
    console.log('Project find called...');
    next();
  });
};

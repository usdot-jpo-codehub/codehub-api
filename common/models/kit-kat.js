/*
  Remote Hooks: https://docs.strongloop.com/display/public/LB/Remote+hooks

  Resource operations: https://docs.strongloop.com/display/public/LB/REST+connector

  Persistent Model but the Operation hooks do not wire in.  It is recognized as only a Remote operation.

  create: POST /users
  findById: GET /users/:id
  delete: DELETE /users/:id
  update: PUT /users/:id
  find: GET /users?limit=5&username=ray&order=email

 */

module.exports = function(KitKat) {
  KitKat.beforeRemote('find', function(ctx, KitKat, next) {
    console.log('Before remote find called...');
    next();
  });

  KitKat.observe('access', function(ctx, next) {
    console.log('DOES NOT GET CALLED');
    next();
  });

  KitKat.afterRemote('find', function(ctx, KitKat, next) {
    console.log('After remote find called...');
    next();
  });

  KitKat.beforeRemote('findById', function(ctx, KitKat, next) {
    console.log('Before remote findById called...');
    next();
  });

  KitKat.beforeRemote('findById', function(ctx, KitKat, next) {
    console.log('After remote findById called...');
    next();
  });
};

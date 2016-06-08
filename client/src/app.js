export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: 'stage', name: 'project',      moduleId: 'modules/project/list',      nav: true, title: 'Feature Projects' },
      { route: 'stage/projects', name: 'projects',      moduleId: 'modules/project/list-all-projects',      nav: true, title: 'Browse' },
      { route: 'stage/favorites', name: 'favorites',      moduleId: 'modules/project/list-favorites',      nav: true, title: 'Favorites' },
    ]);
    this.router = router;
  }
}

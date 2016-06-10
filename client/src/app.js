export class App {
  configureRouter(config, router) {
    config.title = 'Stage';
    config.options.pushState = true;
    config.map([
      { route: '', name: 'project',  moduleId: 'modules/project/list',   nav: true,  title: 'Feature Projects' },
      { route: 'projects', name: 'projects',      moduleId: 'modules/project/list-all-projects',   nav: true, title: 'Browse' },
      { route: 'favorites', name: 'favorites',      moduleId: 'modules/project/list-favorites',  nav: true, title: 'Favorites' },
      { route: 'result',      name: 'result',     moduleId: 'modules/project/result', nav: false}

    ]);
    this.router = router;
  }
}

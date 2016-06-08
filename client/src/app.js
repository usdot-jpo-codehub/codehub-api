export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'project','stage'], name: 'index',      moduleId: 'modules/project/list',      nav: true, title: 'Welcome To Stage' },
      { route: 'projects', name: 'projects',      moduleId: 'modules/project/list-all-projects',      nav: true, title: 'Welcome To Stage All Projects' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}

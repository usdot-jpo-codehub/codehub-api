export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome to Stage' },
      { route: 'repo',      name: 'repo',     moduleId: 'modules/repo/index', nav: true, title:'Booz Repositories' }
    ]);

    this.router = router;
  }
}

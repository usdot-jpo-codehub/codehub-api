'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome to Stage' }, { route: 'repo', name: 'repo', moduleId: 'modules/repo/index', nav: true, title: 'Booz Repositories' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFhLEc7Ozs7O3NCQUNYLGUsNEJBQWdCLE0sRUFBUSxNLEVBQVE7QUFDOUIsaUJBQU8sS0FBUCxHQUFlLFNBQWY7QUFDQSxpQkFBTyxHQUFQLENBQVcsQ0FDVCxFQUFFLE9BQU8sQ0FBQyxFQUFELEVBQUssU0FBTCxDQUFULEVBQTBCLE1BQU0sU0FBaEMsRUFBZ0QsVUFBVSxTQUExRCxFQUEwRSxLQUFLLElBQS9FLEVBQXFGLE9BQU8sa0JBQTVGLEVBRFMsRUFFVCxFQUFFLE9BQU8sTUFBVCxFQUFzQixNQUFNLE1BQTVCLEVBQXdDLFVBQVUsb0JBQWxELEVBQXdFLEtBQUssSUFBN0UsRUFBbUYsT0FBTSxtQkFBekYsRUFGUyxDQUFYOztBQUtBLGVBQUssTUFBTCxHQUFjLE1BQWQ7QUFDRCxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=

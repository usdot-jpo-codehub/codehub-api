'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Index;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Index', Index = function () {
        function Index() {
          _classCallCheck(this, Index);
        }

        Index.prototype.configureRouter = function configureRouter(config, router) {
          config.map([{ route: 'list', moduleId: './list', name: 'list' }, { route: 'edit/:id', moduleId: './edit', name: 'edit' }, { route: 'create', moduleId: './edit', name: 'create' }]);

          this.router = router;
        };

        return Index;
      }());

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=index.js.map

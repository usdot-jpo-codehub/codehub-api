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
          config.map([{ route: ['', 'list'], moduleId: './list', name: 'list' }, { route: 'edit/:id', moduleId: './edit', name: 'edit' }, { route: 'create', moduleId: './edit', name: 'create' }]);

          this.router = router;
        };

        return Index;
      }());

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcmVwby9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3VCQUFhLEs7Ozs7O3dCQUNYLGUsNEJBQWdCLE0sRUFBUSxNLEVBQVE7QUFDOUIsaUJBQU8sR0FBUCxDQUFXLENBQ1QsRUFBQyxPQUFPLENBQUMsRUFBRCxFQUFLLE1BQUwsQ0FBUixFQUFzQixVQUFVLFFBQWhDLEVBQTBDLE1BQU0sTUFBaEQsRUFEUyxFQUVULEVBQUMsT0FBTyxVQUFSLEVBQW9CLFVBQVUsUUFBOUIsRUFBd0MsTUFBTSxNQUE5QyxFQUZTLEVBR1QsRUFBQyxPQUFPLFFBQVIsRUFBa0IsVUFBVSxRQUE1QixFQUFzQyxNQUFNLFFBQTVDLEVBSFMsQ0FBWDs7QUFNQSxlQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0QsUyIsImZpbGUiOiJtb2R1bGVzL3JlcG8vaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9

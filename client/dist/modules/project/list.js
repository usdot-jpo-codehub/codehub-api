"use strict";

System.register(["aurelia-framework", "./projectData", "aurelia-router"], function (_export, _context) {
  "use strict";

  var inject, ProjectData, Router, _dec, _class, List;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_projectData) {
      ProjectData = _projectData.ProjectData;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _export("List", List = (_dec = inject(ProjectData, Router), _dec(_class = function () {
        function List(data, router) {
          _classCallCheck(this, List);

          this.heading = 'Projects List';
          this.projects = [];

          this.service = data;
          this.currentPage = 0;
          this.router = router;
        }

        List.prototype.gotoProject = function gotoProject(project) {
          this.router.navigateToRoute('edit', { id: project.id });
        };

        List.prototype.new = function _new() {
          this.router.navigateToRoute('create');
        };

        List.prototype.getData = function getData() {
          var _this = this;

          this.currentPage++;
          return this.service.getAll().then(function (projects) {
            _this.projects = projects;
          });
        };

        List.prototype.activate = function activate() {
          return this.getData();
        };

        return List;
      }()) || _class));

      _export("List", List);
    }
  };
});
//# sourceMappingURL=list.js.map

"use strict";

System.register(["aurelia-framework", "./projectData", "aurelia-router"], function (_export, _context) {
  "use strict";

  var inject, ProjectData, Router, _createClass, _dec, _class, Edit;

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
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export("Edit", Edit = (_dec = inject(ProjectData, Router), _dec(_class = function () {
        function Edit(data, router) {
          _classCallCheck(this, Edit);

          this.data = data;
          this.router = router;
        }

        Edit.prototype.cancel = function cancel() {
          return this._loadProject(this.project.id);
        };

        Edit.prototype.goBack = function goBack() {
          window.history.back();
        };

        Edit.prototype.activate = function activate(params) {
          this.original = {};
          this.project = {};

          if (params.id) {
            return this._loadProject(params.id);
          }
        };

        Edit.prototype._loadProject = function _loadProject(id) {
          var _this = this;

          return this.data.getById(id).then(function (project) {
            _this.original = JSON.parse(JSON.stringify(project));
            return _this.project = project;
          });
        };

        Edit.prototype.save = function save() {
          var _this2 = this;

          this.data.save(this.project).then(function (project) {
            _this2.original = JSON.parse(JSON.stringify(project));
            _this2.router.navigate("list");
          });
        };

        Edit.prototype.areEqual = function areEqual(obj1, obj2) {
          return Object.keys(obj1).every(function (key) {
            return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
          });
        };

        _createClass(Edit, [{
          key: "isUnchanged",
          get: function get() {
            return this.areEqual(this.project, this.original);
          }
        }]);

        return Edit;
      }()) || _class));

      _export("Edit", Edit);
    }
  };
});
//# sourceMappingURL=edit.js.map

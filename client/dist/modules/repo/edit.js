"use strict";

System.register(["aurelia-framework", "./repoDetail", "aurelia-router"], function (_export, _context) {
  "use strict";

  var inject, RepoDetail, Router, _createClass, _dec, _class, Edit;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_repoDetail) {
      RepoDetail = _repoDetail.RepoDetail;
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

      _export("Edit", Edit = (_dec = inject(RepoDetail, Router), _dec(_class = function () {
        function Edit(data, router) {
          _classCallCheck(this, Edit);

          this.data = data;
          this.router = router;
        }

        Edit.prototype.cancel = function cancel() {
          return this._loadRepo(this.repo.id);
        };

        Edit.prototype.goBack = function goBack() {
          window.history.back();
        };

        Edit.prototype.activate = function activate(params) {
          this.original = {};
          this.repo = {};

          if (params.id) {
            return this._loadRepo(params.id);
          }
        };

        Edit.prototype._loadRepo = function _loadRepo(id) {
          var _this = this;

          return this.data.getById(id).then(function (repo) {
            _this.original = JSON.parse(JSON.stringify(repo));
            return _this.repo = repo;
          });
        };

        Edit.prototype.save = function save() {
          var _this2 = this;

          this.data.save(this.repo).then(function (repo) {
            _this2.original = JSON.parse(JSON.stringify(repo));
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
            return this.areEqual(this.repo, this.original);
          }
        }]);

        return Edit;
      }()) || _class));

      _export("Edit", Edit);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcmVwby9lZGl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLFkscUJBQUEsTTs7QUFDQSxnQixlQUFBLFU7O0FBQ0EsWSxrQkFBQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBSUssSSxXQURaLE9BQU8sVUFBUCxFQUFtQixNQUFuQixDO0FBR0Msc0JBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQjtBQUFBOztBQUN4QixlQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsZUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNEOzt1QkFFRCxNLHFCQUFRO0FBRU4saUJBQU8sS0FBSyxTQUFMLENBQWUsS0FBSyxJQUFMLENBQVUsRUFBekIsQ0FBUDtBQUNELFM7O3VCQUVELE0scUJBQVE7QUFDTixpQkFBTyxPQUFQLENBQWUsSUFBZjtBQUNELFM7O3VCQUVELFEscUJBQVMsTSxFQUFRO0FBQ2YsZUFBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsZUFBSyxJQUFMLEdBQVksRUFBWjs7QUFFQSxjQUFJLE9BQU8sRUFBWCxFQUFlO0FBQ1osbUJBQU8sS0FBSyxTQUFMLENBQWUsT0FBTyxFQUF0QixDQUFQO0FBQ0Y7QUFDRixTOzt1QkFDRCxTLHNCQUFVLEUsRUFBRztBQUFBOztBQUNYLGlCQUFPLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsRUFBbEIsRUFDRixJQURFLENBQ0csZ0JBQVE7QUFDWixrQkFBSyxRQUFMLEdBQWdCLEtBQUssS0FBTCxDQUFXLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBWCxDQUFoQjtBQUNBLG1CQUFPLE1BQUssSUFBTCxHQUFZLElBQW5CO0FBQ0QsV0FKRSxDQUFQO0FBS0QsUzs7dUJBS0QsSSxtQkFBTztBQUFBOztBQUNMLGVBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxLQUFLLElBQXBCLEVBQ0csSUFESCxDQUNRLGdCQUFRO0FBQ1osbUJBQUssUUFBTCxHQUFnQixLQUFLLEtBQUwsQ0FBVyxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQVgsQ0FBaEI7QUFDQSxtQkFBSyxNQUFMLENBQVksUUFBWixDQUFxQixNQUFyQjtBQUNELFdBSkg7QUFLRCxTOzt1QkFDRCxRLHFCQUFTLEksRUFBTSxJLEVBQU07QUFDckIsaUJBQU8sT0FBTyxJQUFQLENBQVksSUFBWixFQUFrQixLQUFsQixDQUF3QixVQUFDLEdBQUQ7QUFBQSxtQkFBUyxLQUFLLGNBQUwsQ0FBb0IsR0FBcEIsS0FBNkIsS0FBSyxHQUFMLE1BQWMsS0FBSyxHQUFMLENBQXBEO0FBQUEsV0FBeEIsQ0FBUDtBQUNELFM7Ozs7OEJBWmtCO0FBQ2YsbUJBQU8sS0FBSyxRQUFMLENBQWMsS0FBSyxJQUFuQixFQUF5QixLQUFLLFFBQTlCLENBQVA7QUFDRCIsImZpbGUiOiJtb2R1bGVzL3JlcG8vZWRpdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=

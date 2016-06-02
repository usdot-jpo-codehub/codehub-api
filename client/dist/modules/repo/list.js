"use strict";

System.register(["aurelia-framework", "./repoDetail", "aurelia-router"], function (_export, _context) {
  "use strict";

  var inject, RepoDetail, Router, _dec, _class, List;

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
      _export("List", List = (_dec = inject(RepoDetail, Router), _dec(_class = function () {
        function List(data, router) {
          _classCallCheck(this, List);

          this.heading = 'Repositories List';
          this.repos = [];

          this.service = data;
          this.currentPage = 0;
          this.router = router;
        }

        List.prototype.gotoRepo = function gotoRepo(repo) {
          this.router.navigateToRoute('edit', { id: repo.id });
        };

        List.prototype.new = function _new() {
          this.router.navigateToRoute('create');
        };

        List.prototype.getData = function getData() {
          var _this = this;

          this.currentPage++;
          return this.service.getAll().then(function (repos) {
            _this.repos = repos;
          });
        };

        List.prototype.activate = function activate() {
          console.log(this.getData);
          return this.getData();
        };

        return List;
      }()) || _class));

      _export("List", List);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcmVwby9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLFkscUJBQUEsTTs7QUFDQSxnQixlQUFBLFU7O0FBQ0EsWSxrQkFBQSxNOzs7c0JBRUssSSxXQURaLE9BQU8sVUFBUCxFQUFtQixNQUFuQixDO0FBTUMsc0JBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQjtBQUFBOztBQUFBLGVBSjFCLE9BSTBCLEdBSmhCLG1CQUlnQjtBQUFBLGVBRjFCLEtBRTBCLEdBRmxCLEVBRWtCOztBQUN4QixlQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0EsZUFBSyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsZUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNEOzt1QkFFRCxRLHFCQUFTLEksRUFBSztBQUNaLGVBQUssTUFBTCxDQUFZLGVBQVosQ0FBNEIsTUFBNUIsRUFBb0MsRUFBRSxJQUFJLEtBQUssRUFBWCxFQUFwQztBQUNELFM7O3VCQUVELEcsbUJBQUs7QUFDSCxlQUFLLE1BQUwsQ0FBWSxlQUFaLENBQTRCLFFBQTVCO0FBQ0QsUzs7dUJBRUQsTyxzQkFBVTtBQUFBOztBQUdSLGVBQUssV0FBTDtBQUNBLGlCQUFPLEtBQUssT0FBTCxDQUFhLE1BQWIsR0FDSixJQURJLENBQ0MsaUJBQVM7QUFDZCxrQkFBSyxLQUFMLEdBQWEsS0FBYjtBQUVELFdBSkssQ0FBUDtBQU1ELFM7O3VCQUVELFEsdUJBQVc7QUFDVCxrQkFBUSxHQUFSLENBQVksS0FBSyxPQUFqQjtBQUNBLGlCQUFPLEtBQUssT0FBTCxFQUFQO0FBQ0QsUyIsImZpbGUiOiJtb2R1bGVzL3JlcG8vbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=

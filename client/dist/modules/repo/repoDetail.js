"use strict";

System.register(["aurelia-framework", "aurelia-http-client"], function (_export, _context) {
  "use strict";

  var inject, HttpClient, _dec, _class, baseUrl, RepoDetail;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      baseUrl = "http://0.0.0.0:3000/api/repos";

      _export("RepoDetail", RepoDetail = (_dec = inject(HttpClient), _dec(_class = function () {
        function RepoDetail(httpClient) {
          _classCallCheck(this, RepoDetail);

          this.http = httpClient;
        }

        RepoDetail.prototype.getById = function getById(id) {
          return this.http.get(baseUrl + "/" + id).then(function (response) {
            return response.content;
          });
        };

        RepoDetail.prototype.getPage = function getPage(pageNumber) {
          return this.http.createRequest(baseUrl).asGet().withParams({ 'page': pageNumber }).send().then(function (response) {
            return response.content;
          });
        };

        RepoDetail.prototype.getAll = function getAll() {
          return this.http.get(baseUrl).then(function (response) {
            return response.content;
          });
        };

        RepoDetail.prototype.save = function save(repo) {
          var request = this.http.createRequest();
          if (repo.id) {
            request.asPut().withUrl(baseUrl + "/" + repo.id).withHeader("Accept", "application/json").withHeader("Content-Type", "application/json").withContent(repo);
          } else {
            request.asPost().withUrl(baseUrl).withHeader("Accept", "application/json").withHeader("Content-Type", "application/json").withContent(repo);
          }
          ;

          return request.send().then(function (response) {
            return response.content;
          });
        };

        return RepoDetail;
      }()) || _class));

      _export("RepoDetail", RepoDetail);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcmVwby9yZXBvRGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLFkscUJBQUEsTTs7QUFDQSxnQixzQkFBQSxVOzs7QUFFSixhLEdBQVUsK0I7OzRCQUdELFUsV0FEWixPQUFPLFVBQVAsQztBQUdDLDRCQUFZLFVBQVosRUFBd0I7QUFBQTs7QUFDdEIsZUFBSyxJQUFMLEdBQVksVUFBWjtBQUNEOzs2QkFFRCxPLG9CQUFRLEUsRUFBSTtBQUNWLGlCQUFPLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBaUIsT0FBakIsU0FBNEIsRUFBNUIsRUFDSixJQURJLENBQ0Msb0JBQVk7QUFDaEIsbUJBQU8sU0FBUyxPQUFoQjtBQUNELFdBSEksQ0FBUDtBQUlELFM7OzZCQUVELE8sb0JBQVEsVSxFQUFZO0FBQ2xCLGlCQUFPLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsT0FBeEIsRUFDSixLQURJLEdBRUosVUFGSSxDQUVPLEVBQUMsUUFBUSxVQUFULEVBRlAsRUFHSixJQUhJLEdBSUosSUFKSSxDQUlDLG9CQUFZO0FBQ2hCLG1CQUFPLFNBQVMsT0FBaEI7QUFDRCxXQU5JLENBQVA7QUFPRCxTOzs2QkFFRCxNLHFCQUFTO0FBQ1AsaUJBQU8sS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLE9BQWQsRUFDSixJQURJLENBQ0Msb0JBQVk7QUFDaEIsbUJBQU8sU0FBUyxPQUFoQjtBQUNELFdBSEksQ0FBUDtBQUlELFM7OzZCQUVELEksaUJBQUssSSxFQUFNO0FBQ1QsY0FBSSxVQUFVLEtBQUssSUFBTCxDQUFVLGFBQVYsRUFBZDtBQUNBLGNBQUksS0FBSyxFQUFULEVBQWE7QUFDWCxvQkFBUSxLQUFSLEdBQ0csT0FESCxDQUNjLE9BRGQsU0FDeUIsS0FBSyxFQUQ5QixFQUdHLFVBSEgsQ0FHYyxRQUhkLEVBR3dCLGtCQUh4QixFQUlHLFVBSkgsQ0FJYyxjQUpkLEVBSThCLGtCQUo5QixFQUtHLFdBTEgsQ0FLZSxJQUxmO0FBTUQsV0FQRCxNQVFLO0FBQ0gsb0JBQVEsTUFBUixHQUNHLE9BREgsQ0FDVyxPQURYLEVBR0csVUFISCxDQUdjLFFBSGQsRUFHd0Isa0JBSHhCLEVBSUcsVUFKSCxDQUljLGNBSmQsRUFJOEIsa0JBSjlCLEVBS0csV0FMSCxDQUtlLElBTGY7QUFNRDtBQUNEOztBQUVBLGlCQUFPLFFBQVEsSUFBUixHQUFlLElBQWYsQ0FBb0I7QUFBQSxtQkFBWSxTQUFTLE9BQXJCO0FBQUEsV0FBcEIsQ0FBUDtBQUNELFMiLCJmaWxlIjoibW9kdWxlcy9yZXBvL3JlcG9EZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9

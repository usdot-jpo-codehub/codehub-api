"use strict";

System.register(["aurelia-framework", "aurelia-http-client"], function (_export, _context) {
  "use strict";

  var inject, HttpClient, _dec, _class, baseUrl, ProjectData;

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
      baseUrl = "http://0.0.0.0:3000/api/projects";

      _export("ProjectData", ProjectData = (_dec = inject(HttpClient), _dec(_class = function () {
        function ProjectData(httpClient) {
          _classCallCheck(this, ProjectData);

          this.http = httpClient;
        }

        ProjectData.prototype.getById = function getById(id) {
          return this.http.get(baseUrl + "/" + id).then(function (response) {
            return response.content;
          });
        };

        ProjectData.prototype.getPage = function getPage(pageNumber) {
          return this.http.createRequest(baseUrl).asGet().withParams({ 'page': pageNumber }).send().then(function (response) {
            return response.content;
          });
        };

        ProjectData.prototype.getAll = function getAll() {
          return this.http.get(baseUrl).then(function (response) {
            return response.content;
          });
        };

        ProjectData.prototype.save = function save(project) {
          var request = this.http.createRequest();
          if (project.id) {
            request.asPut().withUrl(baseUrl + "/" + project.id).withHeader("Accept", "application/json").withHeader("Content-Type", "application/json").withContent(project);
          } else {
            request.asPost().withUrl(baseUrl).withHeader("Accept", "application/json").withHeader("Content-Type", "application/json").withContent(project);
          }
          ;

          return request.send().then(function (response) {
            return response.content;
          });
        };

        return ProjectData;
      }()) || _class));

      _export("ProjectData", ProjectData);
    }
  };
});
//# sourceMappingURL=projectData.js.map

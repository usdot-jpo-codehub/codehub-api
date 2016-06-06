"use strict";

System.register(["aurelia-framework", "aurelia-http-client"], function (_export, _context) {
  "use strict";

  var inject, HttpClient, _dec, _class, baseUrl, CustomerData;

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
      baseUrl = "/api/customers";

      _export("CustomerData", CustomerData = (_dec = inject(HttpClient), _dec(_class = function () {
        function CustomerData(httpClient) {
          _classCallCheck(this, CustomerData);

          this.http = httpClient;
        }

        CustomerData.prototype.getById = function getById(id) {
          return this.http.get(baseUrl + "/" + id).then(function (response) {
            return response.content;
          });
        };

        CustomerData.prototype.getPage = function getPage(pageNumber) {
          return this.http.createRequest(baseUrl).asGet().withParams({ 'page': pageNumber }).send().then(function (response) {
            return response.content;
          });
        };

        CustomerData.prototype.getAll = function getAll() {
          return this.http.get(baseUrl).then(function (response) {
            return response.content;
          });
        };

        CustomerData.prototype.save = function save(customer) {
          var request = this.http.createRequest();
          if (customer.id) {
            request.asPut().withUrl(baseUrl + "/" + customer.id).withHeader("Accept", "application/json").withHeader("Content-Type", "application/json").withContent(customer);
          } else {
            request.asPost().withUrl(baseUrl).withHeader("Accept", "application/json").withHeader("Content-Type", "application/json").withContent(customer);
          }
          ;

          return request.send().then(function (response) {
            return response.content;
          });
        };

        return CustomerData;
      }()) || _class));

      _export("CustomerData", CustomerData);
    }
  };
});
//# sourceMappingURL=customerData.js.map

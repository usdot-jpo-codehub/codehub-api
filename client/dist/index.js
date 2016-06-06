"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, Welcome;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
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

      _export("Welcome", Welcome = function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.repoData = [{ data: "Java Spring Rest Api", type: "code", description: "production-grade Spring based Applications that you can just run. We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration." }, { data: "Hadoop With Storm", type: "component", description: "a distributed real-time computation system for processing large volumes of high-velocity data" }, { data: "Ruby on Rails", type: "stack", description: "an extremely productive web application framework written in Ruby by David Heinemeier Hansson. This tutorial gives you a complete understanding on Ruby on Rails" }, { data: "SPA with Angular 2.0", type: "component", description: "a full code base to Angular for experienced programmers who are building client applications in HTML and TypeScript." }, { data: "Hadoop With Python", type: "code", description: "Effective way writing hadoop mapreduce using python" }, { data: "Java EE6 With JSF & Primefaces", type: "stack", description: "The Java EE platform is to provide developers with a powerful set of APIs while shortening development time, reducing application complexity, and improving application performance." }, { data: "Docker Cloud", type: "component", description: "A Container Platform, the future in cloud computing. Take full advantage of the amazing docker technology" }, { data: "AWS Container Service With Jenkins CI", type: "stack", description: "ECS is a highly scalable, high performance container management service that supports Docker containers and allows you to easily run applications on a managed cluster of Amazon EC2 instances." }];
        }

        _createClass(Welcome, [{
          key: "dataRepo",
          get: function get() {
            return this.repoData;
          }
        }]);

        return Welcome;
      }());

      _export("Welcome", Welcome);
    }
  };
});
//# sourceMappingURL=index.js.map

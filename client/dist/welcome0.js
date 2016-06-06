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

          this.repoData = ["Yes My repo", "Nate Solomon", "wowow"];
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
//# sourceMappingURL=welcome0.js.map

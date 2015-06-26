"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _blunder = require("blunder");

var _blunder2 = _interopRequireDefault(_blunder);

var JsonApiFormatter = (function () {
	function JsonApiFormatter() {
		_classCallCheck(this, JsonApiFormatter);
	}

	_createClass(JsonApiFormatter, [{
		key: "formatResponse",
		value: function formatResponse(response) {
			if (response && typeof response.set === "function") {
				response.set("content-type", "application/vnd.api+json");
			}
		}
	}, {
		key: "format",
		value: function format(body) {
			if (body instanceof _blunder2["default"]) {
				var _ret = (function () {
					var errors = [];
					body.errors.forEach(function (error) {
						errors.push({
							title: error.name,
							details: error.message
						});
					});
					return {
						v: { errors: errors }
					};
				})();

				if (typeof _ret === "object") return _ret.v;
			} else if (body instanceof Error) {
				return {
					errors: [{
						title: body.name,
						details: body.message
					}]
				};
			} else if (Array.isArray(body) && body.length && body[0] instanceof Error) {
				var _ret2 = (function () {
					var errors = [];
					body.forEach(function (error) {
						errors.push({
							title: error.name,
							details: error.message
						});
					});
					return {
						v: { errors: errors }
					};
				})();

				if (typeof _ret2 === "object") return _ret2.v;
			} else {
				return { data: body };
			}
		}
	}]);

	return JsonApiFormatter;
})();

exports["default"] = JsonApiFormatter;
module.exports = exports["default"];
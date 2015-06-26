"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libJsonApiFormatterJs = require("../lib/jsonApiFormatter.js");

var _libJsonApiFormatterJs2 = _interopRequireDefault(_libJsonApiFormatterJs);

var _blunder = require("blunder");

var _blunder2 = _interopRequireDefault(_blunder);

describe("JsonApiFormatter", function () {
	var formatter = undefined,
	    data = undefined,
	    error = undefined;

	beforeEach(function () {
		formatter = new _libJsonApiFormatterJs2["default"]();
		data = { id: 2, name: "Bob Belcher Jr", age: 15 };
		error = new Error("Bob Belcher does not have any kids.");
	});

	describe(".format(body)", function () {
		it("add the .data root element on the provided body", function () {
			formatter.format(data).should.eql({ data: data });
		});

		it("add the .errors root element on the provided body if the (body instanceof MultiError === true)", function () {
			formatter.format(new _blunder2["default"](error)).should.eql({ errors: [{
					title: error.name,
					details: error.message
				}] });
		});

		it("add the .errors root element on the provided body if the (body instanceof Error === true)", function () {
			formatter.format(error).should.eql({ errors: [{
					title: error.name,
					details: error.message
				}] });
		});

		it("add the .errors root element on the provided body if the (Array.isArray(body) && body[0] instanceof Error === true)", function () {
			formatter.format([error]).should.eql({ errors: [{
					title: error.name,
					details: error.message
				}] });
		});
	});
});
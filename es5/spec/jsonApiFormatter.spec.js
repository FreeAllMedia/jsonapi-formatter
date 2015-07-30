"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libJsonApiFormatterJs = require("../lib/jsonApiFormatter.js");

var _libJsonApiFormatterJs2 = _interopRequireDefault(_libJsonApiFormatterJs);

describe("JsonApiFormatter", function () {
	var formatter = undefined,
	    data = undefined,
	    error = undefined,
	    secondError = undefined,
	    multiError = undefined;

	beforeEach(function () {
		formatter = new _libJsonApiFormatterJs2["default"]();
		data = { id: 2, name: "Bob Belcher Jr", age: 15 };
		error = new Error("Bob Belcher does not have any kids.");
		secondError = new Error("No, Bob does not have a wife neither.");
		multiError = new Error();
		multiError.toJSON = function () {
			return [error, secondError];
		};
	});

	describe(".format(body)", function () {
		it("add the .data root element on the provided body", function () {
			formatter.format(data).should.eql({ data: data });
		});

		it("add the .errors root element on the provided body if the (body instanceof MultiError === true)", function () {
			formatter.format(multiError).should.eql({
				errors: [{
					title: error.name,
					details: error.message
				}, {
					title: secondError.name,
					details: secondError.message
				}]
			});
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
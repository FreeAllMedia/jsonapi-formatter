import JsonApiFormatter from "../lib/jsonApiFormatter.js";
import MultiError from "blunder";

describe("JsonApiFormatter", () => {
	let formatter,
		data,
		error;

	beforeEach(() => {
		formatter = new JsonApiFormatter();
		data = {id: 2, name: "Bob Belcher Jr", age: 15};
		error = new Error("Bob Belcher does not have any kids.");
	});

	describe(".format(body)", () => {
		it("add the .data root element on the provided body", () => {
			formatter.format(data).should.eql({data: data});
		});

		it("add the .errors root element on the provided body if the (body instanceof MultiError === true)", () => {
			formatter.format(new MultiError(error)).should.eql({errors: [{
				title: error.name,
				details: error.message
			}]});
		});

		it("add the .errors root element on the provided body if the (body instanceof Error === true)", () => {
			formatter.format(error).should.eql({errors: [{
				title: error.name,
				details: error.message
			}]});
		});

		it("add the .errors root element on the provided body if the (Array.isArray(body) && body[0] instanceof Error === true)", () => {
			formatter.format([error]).should.eql({errors: [{
				title: error.name,
				details: error.message
			}]});
		});
	});
});

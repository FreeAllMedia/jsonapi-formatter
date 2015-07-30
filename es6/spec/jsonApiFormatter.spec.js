import JsonApiFormatter from "../lib/jsonApiFormatter.js";

describe("JsonApiFormatter", () => {
	let formatter,
		data,
		error,
		secondError,
		multiError;

	beforeEach(() => {
		formatter = new JsonApiFormatter();
		data = {id: 2, name: "Bob Belcher Jr", age: 15};
		error = new Error("Bob Belcher does not have any kids.");
		secondError = new Error("No, Bob does not have a wife neither.");
		multiError = new Error();
		multiError.toJSON = () => {
				return [error, secondError];
			};
	});

	describe(".format(body)", () => {
		it("add the .data root element on the provided body", () => {
			formatter.format(data).should.eql({data: data});
		});

		it("add the .errors root element on the provided body if the (body instanceof MultiError === true)", () => {
			formatter.format(multiError).should.eql(
				{
					errors: [
						{
							title: error.name,
							details: error.message
						},
						{
							title: secondError.name,
							details: secondError.message
						}
					]
				}
			);
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

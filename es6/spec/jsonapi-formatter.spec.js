import Jsonapi-formatter from "../lib/jsonapi-formatter.js";

describe("Jsonapi-formatter", () => {
	let component;

	before(() => {
		component = new Jsonapi-formatter();
	});

	it("should say something", () => {
		component.saySomething().should.equal("Something");
	});
});

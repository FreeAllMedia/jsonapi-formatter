import MultiError from "blunder";

export default class JsonApiFormatter {
	formatResponse(response) {
		if(response && typeof response.set === "function") {
			response.set("content-type", "application/vnd.api+json");
		}
	}

	format(body) {
		if(body instanceof MultiError) {
			let errors = [];
			body.errors.forEach((error) => {
				errors.push({
					title: error.name,
					details: error.message
				});
			});
			return {errors: errors};
		} else if(body instanceof Error) {
			return {
				errors: [
					{
						title: body.name,
						details: body.message
					}
				]
			};
		} else if(Array.isArray(body) && body.length && body[0] instanceof Error) {
			let errors = [];
			body.forEach((error) => {
				errors.push({
					title: error.name,
					details: error.message
				});
			});
			return {errors: errors};
		} else {
			return {data: body};
		}
	}
}

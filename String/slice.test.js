const { expect } = require("@jest/globals");
const slice = require("./slice");

describe("slice", () => {
	let str = "I don't think ghosts exist";
	test("slice the string from specified index", () => {
		expect(slice(str, 8)).toEqual("think ghosts exist");
	});
	test("add slice's end point, the character of endIndex won't include", () => {
		expect(slice(str, 8, 13)).toEqual("think");
	});
});

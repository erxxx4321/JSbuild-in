const { expect } = require("@jest/globals");
const endsWith = require("./endsWith");

describe("endsWith", () => {
	let str = "Feel the good!";
	test("Detect if the provided element is at the end of string", () => {
		expect(endsWith(str, "d!")).toEqual(true);
	});
	test("Detect if the provided element is at the end of string which has specific length", () => {
		expect(endsWith(str, "el", 4)).toEqual(true);
	});
});

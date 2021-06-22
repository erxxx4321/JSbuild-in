const padEnd = require("./padEnd");

describe("pad the string with given string to target length", () => {
	test("pad with specified string", () => {
		expect(padEnd("abc", 6, "defghijk")).toEqual("abcdef");
	});
	test("the length of string plus pad string is shorter than the target length", () => {
		expect(padEnd("abc", 6, "d")).toEqual("abcddd");
	});
	test.skip("specified length is shorter than string's length", () => {
		expect(padEnd("abc", 2)).toEqual("abc");
	});
	test.skip("pad without given string", () => {
		expect(padEnd("abc", 6)).toEqual("abc   ");
	});
});

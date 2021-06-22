const join = require("./join");

describe("join", () => {
	let arr = [1, 2, 3];
	test("Omit separator", () => {
		expect(join(arr)).toEqual("1,2,3");
	});
	test.skip("separator is empty string", () => {
		expect(join(arr, "")).toEqual("123");
	});
	test.skip("separator is Exclamation mark", () => {
		expect(join(arr, "!")).toEqual("1!2!3");
	});
});

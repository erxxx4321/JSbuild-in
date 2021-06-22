const repeat = require("./repeat");

describe("according to specified number, repeat the string", () => {
	let str = "sayhi";
	test("given number is integer", () => {
		expect(repeat(str, 2)).toEqual("sayhisayhi");
	});
	test.skip("given number is decimal", () => {
		expect(repeat(str, 2.5)).toEqual("sayhisayhi");
	});
});

const { expect } = require("@jest/globals");
const trim = require("./trim");

test("remove the whitespace between both side of string", () => {
	expect(trim("     Hello world!   ")).toEqual("Hello world!");
});

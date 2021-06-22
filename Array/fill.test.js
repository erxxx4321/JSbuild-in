const fill = require("./fill");

test("Value is number", () => {
	expect(fill([1, 2, 3], 10)).toEqual([10, 10, 10]);
});
test("Value is string", () => {
	expect(fill([1, 2, 3], "hello")).toEqual(["hello", "hello", "hello"]);
});

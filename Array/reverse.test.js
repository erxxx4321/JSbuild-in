const reverse = require("./reverse");

test("reverse", () => {
	expect(reverse([1, 3, 7, 4])).toEqual([4, 7, 3, 1]);
});

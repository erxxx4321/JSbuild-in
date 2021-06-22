const indexOf = require("./indexOf");

describe("indexOf : return the index of given value in array", () => {
	let arr = [1, 2, 3, 4, 1];
	test("given value exist, return the first be found", () => {
		expect(indexOf(arr, 1)).toEqual(0);
	});
	test("given value doesn't exist in array", () => {
		expect(indexOf(arr, 5)).toEqual(-1);
	});
	test("search from the given started index", () => {
		expect(indexOf(arr, 1, 3)).toEqual(4);
	});
});

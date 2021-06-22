const { expect } = require("@jest/globals");
const map = require("./map");

describe("map", () => {
	test("Every element in array is called by provided function", () => {
		let arr = [1, 2, 3];
		expect(
			map(arr, function (element) {
				return element ** 2;
			})
		).toEqual([1, 4, 9]);
	});
});

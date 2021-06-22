const filter = require("./filter");

test("Use filter to remove target number in the array", () => {
	let arr = [1, 3, 3, 2, 8];
	let target = 3;

	expect(
		filter(arr, function (element) {
			return element !== target;
		})
	).toEqual([1, 2, 8]);
});

test.skip("Output the string in array which length is longer than 6", () => {
	const arr = [
		"spray",
		"limit",
		"elite",
		"exuberant",
		"destruction",
		"present",
	];

	expect(
		filter(arr, function (element) {
			return element.length > 6;
		})
	).toEqual(["exuberant", "destruction", "present"]);
});

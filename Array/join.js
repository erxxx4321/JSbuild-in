const join = function (arr, separator) {
	let str = "";
	for (i = 0; i < arr.length; i++) {
		if (separator) {
			str += arr[i] + separator;
		} else if (separator === "") {
			str += arr[i];
		} else {
			str += arr[i] + ",";
		}
	}

	let output = "";

	for (i = 0; separator === "" ? i < str.length : i < str.length - 1; i++) {
		output += str[i];
	}
	return output;
};

module.exports = join;

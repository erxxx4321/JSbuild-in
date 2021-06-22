const fill = function (arr, value) {
	for (i = 0; i < arr.length; i++) {
		arr[i] = value;
	}
	return arr;
};

module.exports = fill;

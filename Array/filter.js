const filter = function (arr, callback) {
	let result = [];
	for (i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
};

module.exports = filter;

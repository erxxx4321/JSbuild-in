const indexOf = function (arr, searchValue, fromIndex) {
	for (i = fromIndex ?? 0; i < arr.length; i++) {
		if (arr[i] === searchValue) {
			return i;
		}
	}
	return -1;
};

module.exports = indexOf;

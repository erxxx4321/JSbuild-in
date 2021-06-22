const map = function (arr, callback) {
	let newArr = [];

	for (i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i]));
	}
	return newArr;
};

module.exports = map;

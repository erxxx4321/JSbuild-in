const reverse = function (arr) {
	let reversedArr = [];
	for (i = arr.length - 1; i >= 0; i--) {
		reversedArr.push(arr[i]);
	}
	return reversedArr;
};

module.exports = reverse;

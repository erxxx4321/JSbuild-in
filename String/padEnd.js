const padEnd = function (str, targetLength, padString) {
	if (str.length > targetLength) {
		return str;
	}

	let result = str;
	if (str.length < targetLength) {
		for (i = str.length; i < targetLength; i++) {
			result += padString ?? " ";
		}
	}

	let newResult = "";
	for (i = 0; i < targetLength; i++) {
		newResult += result[i];
	}
	return newResult;
};

module.exports = padEnd;

const slice = function (str, beginIndex, endIndex) {
	let result = "";
	for (i = beginIndex; i < (endIndex ?? str.length); i++) {
		result += str[i];
	}
	return result;
};

module.exports = slice;

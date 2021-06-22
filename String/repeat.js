const repeat = function (str, count) {
	let result = "";
	for (i = 1; i <= Math.floor(count); i++) {
		result += str;
	}
	return result;
};

module.exports = repeat;

const toLowerCase = function (str) {
	let newStr = "";
	for (i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
			newStr += String.fromCharCode(str.charCodeAt(i) + 32);
		} else {
			newStr += str[i];
		}
	}
	return newStr;
};

module.exports = toLowerCase;

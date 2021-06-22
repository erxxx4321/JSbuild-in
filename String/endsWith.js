const endsWith = function (str, searchString, length) {
	let start = (length ?? str.length) - searchString.length;

	let newStr = "";

	for (i = start; length ? i < length : i < str.length; i++) {
		newStr += str[i];
	}

	if (newStr === searchString) return true;
	else return false;
};

module.exports = endsWith;

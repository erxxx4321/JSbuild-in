const trim = function (str) {
	return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};

module.exports = trim;

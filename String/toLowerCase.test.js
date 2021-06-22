const toLowerCase = require("./toLowerCase");

test("return the alphabets of string converted lower case", () => {
	expect(toLowerCase("Hypertext Transfer Protocol")).toEqual(
		"hypertext transfer protocol"
	);
});

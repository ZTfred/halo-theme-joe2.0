module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: "eslint:recommended",
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: "module",
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-undef": ["off"],
		"no-unused-vars": ["off"],
		"no-useless-escape": ["off"],
		"no-mixed-spaces-and-tabs": ["off"],
		"no-inner-declarations": ["off"],
	},
};
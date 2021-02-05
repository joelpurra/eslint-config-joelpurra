const sharedRules = () => ({
	"array-bracket-newline": [
		"error",
		{
			minItems: 1,
			multiline: true,
		},
	],
	"array-bracket-spacing": [
		"error",
		"always",
	],
	"array-element-newline": [
		"error",
		"always",
	],
	"arrow-parens": [
		"error",
		"always",
	],
	"capitalized-comments": "off",
	"comma-dangle": [
		"error",
		"always-multiline",
	],
	"function-call-argument-newline": [
		"error",
		"consistent",
	],
	"import/order": "error",
	"no-console": "error",
	"no-sync": "error",
	"no-tabs": [
		"error",
		{
			allowIndentationTabs: true,
		},
	],
	"no-unused-vars": "warn",
	"no-useless-concat": "error",
	"no-warning-comments": "off",
	"object-curly-newline": [
		"error",
		{
			minProperties: 1,
		},
	],
	"object-curly-spacing": [
		"error",
		"always",
	],
	"object-property-newline": "error",
	"operator-linebreak": [
		"error",
		"before",
	],
	"promise/always-return": "error",
	"promise/catch-or-return": "error",
	"quote-props": [
		"error",
		"as-needed",
		{
			keywords: true,
		},
	],
	quotes: [
		"error",
		"double",
	],
	"sort-keys": "error",
	"spaced-comment": "off",
});

module.exports = sharedRules;

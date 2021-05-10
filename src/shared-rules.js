/*
This file is part of eslint-config-joelpurra -- Opinionated shareable configuration by and for Joel Purra.

MIT License:

Copyright (c) 2015, 2016, 2017, 2018, 2019, 2020 Joel Purra <https://joelpurra.com/>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
	"import/extensions": "off",
	"import/order": "error",
	"no-console": "error",
	"no-sync": "error",
	"no-tabs": [
		"error",
		{
			allowIndentationTabs: true,
		},
	],
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
	"simple-import-sort/exports": "error",
	"simple-import-sort/imports": "error",
	"sort-keys": "error",
	"spaced-comment": "off",
});

module.exports = sharedRules;

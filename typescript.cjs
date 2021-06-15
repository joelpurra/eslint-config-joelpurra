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

const sharedPlugins = require("./src/shared-plugins.cjs");
const sharedRules = require("./src/shared-rules.cjs");

module.exports = {
	"extends": [
		// NOTE: for some reason, extending files from this repository (such as ./esnext.cjs)
		// does not work as expected. Using shared functions instead.
		"xo",
		"xo-typescript",
	],
	plugins: sharedPlugins(),
	rules: {
		...sharedRules(),
		...{
			"@typescript-eslint/comma-dangle": [
				"error",
				"always-multiline",
			],
			"@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/no-explicit-any": [
				"error",
				{
					fixToUnknown: true,
				},
			],
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/prefer-readonly": "error",
			"@typescript-eslint/prefer-readonly-parameter-types": [
				"error",
				{
					checkParameterProperties: false,
				},
			],
			"@typescript-eslint/quotes": [
				"error",
				"double",
			],
		},
	},
};

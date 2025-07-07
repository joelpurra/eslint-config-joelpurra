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

import defaultConfig from "./index.mjs";

export const mjsExtensions = [
	"cjs",
	"mjs",
];
export const mjsFilesGlob = `**/*.{${mjsExtensions.join(",")}}`;

const esNextConfig = [
	...defaultConfig,
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
		},
		rules: {
			// TODO: avoid mixing jsx/react rules with other rules; create react/typescript/react+typescript configs.
			"@stylistic/jsx-quotes": [
				"error",
				"prefer-double",
			],
			"import-x/first": "error",
			"import-x/newline-after-import": "error",
			"import-x/no-duplicates": [
				"error",
				{
					"prefer-inline": false,
				},
			],
			"import-x/order": [
				"error",
				{
					alphabetize: {
						caseInsensitive: true,
						order: "asc",
						orderImportKind: "asc",
					},
					groups: [
						"type",
						"builtin",
						"external",
						"parent",
						"sibling",
						"index",
					],
					"newlines-between": "always",
					sortTypesGroup: true,
					warnOnUnassignedImports: true,
				},
			],
			"n/no-extraneous-import": "off",
			"react/jsx-no-leaked-render": "off",
		},
	},
];

export default esNextConfig;

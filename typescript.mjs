/*
This file is part of eslint-config-joelpurra -- Opinionated shareable configuration by and for Joel Purra.

MIT License:

Copyright (c) 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025 Joel Purra <https://joelpurra.com/>

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

import {
	plugin as typescriptEslintPlugin,
} from "typescript-eslint";

import esNextConfig from "./esnext.mjs";

export const tsExtensions = [
	"cts",
	"mts",
	"ts",
	"tsx",
];
export const tsFilesGlob = `**/*.{${tsExtensions.join(",")}}`;

const typescriptConfig = [
	...esNextConfig,
	{
		files: [
			tsFilesGlob,
		],
		plugins: {
			"@typescript-eslint": typescriptEslintPlugin,
		},
		rules: {
			"@typescript-eslint/consistent-type-definitions": [
				"error",
				"interface",
			],
			"@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/naming-convention": [
				"error",
				{
					format: [
						// https://github.com/typescript-eslint/typescript-eslint/issues/2607
						"PascalCase",
						"strictCamelCase",
					],
					selector: "function",
				},
			],
			"@typescript-eslint/no-empty-object-type": [
				"error",
				{
					allowWithName: "Props$",
				},
			],
			"@typescript-eslint/no-explicit-any": [
				"error",
				{
					fixToUnknown: true,
				},
			],
			// NOTE: copied and modified (using "_DISABLED_") from upstream.
			// https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js
			"@typescript-eslint/no-restricted-types": [
				"error",
				{
					/* eslint-disable sort-keys */
					types: {
						object: {
							message: "The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
							fixWith: "Record<string, unknown>",
						},
						// eslint-disable-next-line camelcase
						_DISABLED_null: {
							message: "Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7",
							fixWith: "undefined",
						},
						Buffer: {
							message: "Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer",
							suggest: [
								"Uint8Array",
							],
						},
						"[]": "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
						"[[]]": "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
						"[[[]]]": "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
						"[[[[]]]]": "ur drunk 🤡",
						"[[[[[]]]]]": "🦄💥",
					},
					/* eslint-enable sort-keys */
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
		},
	},
];

export default typescriptConfig;

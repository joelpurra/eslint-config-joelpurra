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
		"@typescript-eslint/ban-types": [
			// NOTE: copied and modified from upstream.
			// https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js
			"error",
			{
				extendDefaults: false,
				types: {
					Boolean: {
						fixWith: "boolean",
						message: "Use `boolean` instead.",
					},
					Function: "Use a specific function type instead, like `() => void`.",
					Number: {
						fixWith: "number",
						message: "Use `number` instead.",
					},
					Object: {
						fixWith: "Record<string, unknown>",
						message: "The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848",
					},
					String: {
						fixWith: "string",
						message: "Use `string` instead.",
					},
					Symbol: {
						fixWith: "symbol",
						message: "Use `symbol` instead.",
					},
					"[[[[[]]]]]": "🦄💥",
					"[[[[]]]]": "ur drunk 🤡",
					"[[[]]]": "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
					"[[]]": "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
					"[]": "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
					// eslint-disable-next-line camelcase
					_DISABLED_null: {
						fixWith: "undefined",
						message: "Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7",
					},
					object: {
						fixWith: "Record<string, unknown>",
						message: "The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
					},
					"{}": {
						fixWith: "Record<string, unknown>",
						message: "The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.",
					},
				},
			},
		],
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
};

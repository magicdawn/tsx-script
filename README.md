# tsx-script

> add a script mode to the tsx typescript runner

[![Build Status](https://img.shields.io/github/actions/workflow/status/magicdawn/tsx-script/ci.yml?style=flat-square&branch=main)](https://github.com/magicdawn/tsx-script/actions/workflows/ci.yml)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/tsx-script.svg?style=flat-square)](https://codecov.io/gh/magicdawn/tsx-script)
[![npm version](https://img.shields.io/npm/v/tsx-script.svg?style=flat-square)](https://www.npmjs.com/package/tsx-script)
[![npm downloads](https://img.shields.io/npm/dm/tsx-script.svg?style=flat-square)](https://www.npmjs.com/package/tsx-script)
[![npm license](https://img.shields.io/npm/l/tsx-script.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install

```sh
$ pnpm add -g tsx-script
```

## Why

https://github.com/privatenumber/tsx/issues/482

this took is a shortcut for `tsx --tsconfig /dir/for/script/tsconfig.json /dir/for/script/script.ts`
aka ts-node's

- script mode: resolve tsconfig from script entry
- cwd mode: resolve tsconfig from cwd, current tsx use cwd

## Usage

require `tsx` installation.

- global install `pnpm add -g tsx tsx-script`
- project install `pnpm add tsx tsx-script`

then use `tsx-script` or `tsxs` to use this script mode.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

the MIT License http://magicdawn.mit-license.org

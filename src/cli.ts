#!/usr/bin/env node

import path from 'node:path'
import { difference } from 'es-toolkit'
import { $ } from 'execa'
import { findTsconfig } from 'get-tsconfig'
import yargs from 'yargs'

main()
async function main() {
  let args = process.argv.slice(2)
  const parsed = yargs(args).parseSync()
  if (parsed._[0]) {
    const script = path.resolve(parsed._[0].toString())
    const tsconfigPath = findTsconfig(script)
    if (tsconfigPath) {
      args = ['--tsconfig', tsconfigPath, ...args]
    }
  }

  // tsx & node does not support --verbose
  const verbose = args.includes('--verbose')
  if (verbose) {
    args = difference(args, ['--verbose'])
  }

  await $({ preferLocal: true, stdio: 'inherit', verbose: verbose ? 'short' : undefined })`tsx ${args}`
}

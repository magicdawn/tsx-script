#!/usr/bin/env node

import path from 'node:path'
import { difference } from 'es-toolkit'
import { $ } from 'execa'
import fse from 'fs-extra'
import { findTsconfig } from 'get-tsconfig'

// no yargs for `--inspect-brk script.ts` make `inspectBrk: script.ts`

main()
async function main() {
  let args = process.argv.slice(2)
  let script: string | undefined
  script ||= args.find((x) => {
    if (!x.startsWith('--') && !x.startsWith('-') && fse.existsSync(path.resolve(x))) {
      return x
    }
  })
  if (script) {
    const tsconfigPath = findTsconfig(path.resolve(script))
    if (tsconfigPath) {
      args = ['--tsconfig', tsconfigPath, ...args]
    }
  }

  // tsx & node does not support --verbose
  const verbose = args.includes('--verbose')
  if (verbose) {
    args = difference(args, ['--verbose'])
  }

  const $$ = $({
    preferLocal: true,
    stdio: 'inherit',
    verbose: verbose ? 'short' : undefined,
    reject: false,
  })
  await $$`tsx ${args}`
}

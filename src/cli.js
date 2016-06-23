#! /usr/bin/env node

import { writeFileSync } from 'fs'
import program from 'commander'
import potFormatter from './json2po/potFormatter'
import messageReader from './json2po/jsonMessageReader'
import poMessageReader from './po2json/poMessageReader'

program
  .command('json2pot <src> <dest>', 'converts react-intl extracted json to po/pot')
  .option('-p, --pattern', 'glob pattern used to find the src files')
  .option('-d, --use-default', 'use defaultMessage as msgstr')
  .action((src, dest, { pattern, useDefault }) => {
    writeFileSync(
      dest,
      potFormatter(messageReader({ cwd: src, messagesPattern: pattern }), useDefault),
    )
  })
  .command('po2json <src> <dest>', 'converts po files to json')
  .option('-p, --pattern', 'glob pattern used to find the src files')
  .option('--pretty', 'preety print json')
  .action((src, dest, { pattern, pretty }) => {
    writeFileSync(
      dest,
      JSON.stringify(poMessageReader({
        cwd: src,
        messagesPattern: pattern,
      }), null, pretty ? '\t' : undefined)
    )
  })

program.parse(process.argv)

import { promises as fs } from 'fs'
import path from 'path'

const types = [
  'commonjs',
  'module',
]

/* eslint-disable no-console */
async function writePackageFile (type) {
  const filename = path.join('dist', type, 'package.json')
  return fs
    .writeFile(filename, `{ "type": "${type}" }`)
    .then(() => console.log(`Created ${filename}`))
    .catch((error) => {
      console.error(`Failed to create ${filename}: ${error}`)
      throw new Error()
    })
}

const writes = types.map(type => writePackageFile(type))

await Promise.allSettled(writes)
  .then(results => {
    const success = results.every(result => result.status === 'fulfilled')
    process.exit(success ? 0 : 1)
  })

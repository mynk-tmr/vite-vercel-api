import { existsSync } from 'node:fs'

const file = existsSync('./api/index.js')
if (!file) throw new Error('API file not found')

console.log('Pushing to Github...')

import { spawnSync } from 'node:child_process'

const result = spawnSync('git', ['push', 'origin'], { stdio: 'inherit' })
if (result.error) throw result.error

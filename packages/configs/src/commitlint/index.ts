import gitmojis from '@/commitlint/gitmojis'
import { defineConfig } from 'czg'
import fs from 'node:fs'
import path from 'node:path'

const appScopes = fs.existsSync(path.resolve(process.cwd(), 'apps')) ? fs.readdirSync(path.resolve(process.cwd(), 'apps')) : []
const packageScopes = fs.existsSync(path.resolve(process.cwd(), 'packages'))
  ? fs.readdirSync(path.resolve(process.cwd(), 'packages'))
  : []

const config = defineConfig({
  extends: ['gitmoji'],
  prompt: {
    allowCustomIssuePrefix: false,
    allowCustomScopes: false,
    emojiAlign: 'left',
    issuePrefixes: [
      { name: 'Link issue.', value: 'Link' },
      { name: 'Close issue.', value: 'Close' },
    ],
    messages: {
      body: 'Body:',
      confirmCommit: 'Confirm?',
      customScope: 'Custom scope:',
      footer: 'Issues:',
      scope: 'Scope:',
      subject: 'Subject:',
      type: 'Type:',
    },
    scopes: [...appScopes, ...packageScopes],
    types: gitmojis.map(({ emoji, name, value }) => ({
      emoji: '',
      name,
      value: `${emoji} ${value}`,
    })),
    typesSearchValue: false,
    useEmoji: true,
  },
})

export default config

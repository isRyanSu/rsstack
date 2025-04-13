import type { Config } from 'stylelint'

const config: Config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-tailwindcss',
    'stylelint-config-clean-order',
  ],
}

export default config

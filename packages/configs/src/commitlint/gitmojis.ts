const gitmojis = [
  {
    emoji: '🎨',
    name: '🎨   Improve structure / format of the code.',
    value: 'chore',
  },
  {
    emoji: '⚡️',
    name: '⚡️   Improve performance.',
    value: 'perf',
  },
  {
    emoji: '🔥',
    name: '🔥   Remove code or files.',
    value: 'chore',
  },
  {
    emoji: '🐛',
    name: '🐛   Fix a bug.',
    value: 'fix',
  },
  {
    emoji: '🚑️',
    name: '🚑️   Critical hotfix.',
    value: 'fix',
  },
  {
    emoji: '✨',
    name: '✨   Introduce new features.',
    value: 'feat',
  },
  {
    emoji: '📝',
    name: '📝   Add or update documentation.',
    value: 'docs',
  },
  {
    emoji: '🚀',
    name: '🚀   Deploy stuff.',
    value: 'chore',
  },
  {
    emoji: '💄',
    name: '💄   Add or update the UI and style files.',
    value: 'style',
  },
  {
    emoji: '🎉',
    name: '🎉   Begin a project.',
    value: 'chore',
  },
  {
    emoji: '✅',
    name: '✅   Add, update, or pass tests.',
    value: 'test',
  },
  {
    emoji: '🔒️',
    name: '🔒️   Fix security or privacy issues.',
    value: 'fix',
  },
  {
    emoji: '🔐',
    name: '🔐   Add or update secrets.',
    value: 'chore',
  },
  {
    emoji: '🔖',
    name: '🔖   Release / Version tags.',
    value: 'chore',
  },
  {
    emoji: '🚨',
    name: '🚨   Fix compiler / linter warnings.',
    value: 'fix',
  },
  {
    emoji: '🚧',
    name: '🚧   Work in progress.',
    value: 'chore',
  },
  {
    emoji: '💚',
    name: '💚   Fix CI Build.',
    value: 'ci',
  },
  {
    emoji: '⬇️',
    name: '⬇️    Downgrade dependencies.',
    value: 'build',
  },
  {
    emoji: '⬆️',
    name: '⬆️    Upgrade dependencies.',
    value: 'build',
  },
  {
    emoji: '📌',
    name: '📌   Pin dependencies to specific versions.',
    value: 'build',
  },
  {
    emoji: '👷',
    name: '👷   Add or update CI build system.',
    value: 'ci',
  },
  {
    emoji: '📈',
    name: '📈   Add or update analytics or track code.',
    value: 'chore',
  },
  {
    emoji: '♻️',
    name: '♻️    Refactor code.',
    value: 'refactor',
  },
  {
    emoji: '➕',
    name: '➕   Add a dependency.',
    value: 'build',
  },
  {
    emoji: '➖',
    name: '➖   Remove a dependency.',
    value: 'build',
  },
  {
    emoji: '🔧',
    name: '🔧   Add or update configuration files.',
    value: 'chore',
  },
  {
    emoji: '🔨',
    name: '🔨   Add or update development scripts.',
    value: 'chore',
  },
  {
    emoji: '🌐',
    name: '🌐   Internationalization and localization.',
    value: 'feat',
  },
  {
    emoji: '✏️',
    name: '✏️    Fix typos.',
    value: 'fix',
  },
  {
    emoji: '💩',
    name: '💩   Write bad code that needs to be improved.',
    value: 'refactor',
  },
  {
    emoji: '⏪️',
    name: '⏪️   Revert changes.',
    value: 'revert',
  },
  {
    emoji: '🔀',
    name: '🔀   Merge branches.',
    value: 'chore',
  },
  {
    emoji: '📦️',
    name: '📦️   Add or update compiled files or packages.',
    value: 'build',
  },
  {
    emoji: '👽️',
    name: '👽️   Update code due to external API changes.',
    value: 'fix',
  },
  {
    emoji: '🚚',
    name: '🚚   Move or rename resources (e.g.: files, paths, routes).',
    value: 'chore',
  },
  {
    emoji: '📄',
    name: '📄   Add or update license.',
    value: 'docs',
  },
  {
    emoji: '💥',
    name: '💥   Introduce breaking changes.',
    value: 'feat',
  },
  {
    emoji: '🍱',
    name: '🍱   Add or update assets.',
    value: 'chore',
  },
  {
    emoji: '♿️',
    name: '♿️   Improve accessibility.',
    value: 'feat',
  },
  {
    emoji: '💡',
    name: '💡   Add or update comments in source code.',
    value: 'docs',
  },
  {
    emoji: '🍻',
    name: '🍻   Write code drunkenly.',
    value: 'chore',
  },
  {
    emoji: '💬',
    name: '💬   Add or update text and literals.',
    value: 'chore',
  },
  {
    emoji: '📄',
    name: '🗃️    Perform database related changes.',
    value: 'chore',
  },
  {
    emoji: '🔊',
    name: '🔊   Add or update logs.',
    value: 'chore',
  },
  {
    emoji: '🔇',
    name: '🔇   Remove logs.',
    value: 'chore',
  },
  {
    emoji: '👥',
    name: '👥   Add or update contributor(s).',
    value: 'docs',
  },
  {
    emoji: '🚸',
    name: '🚸   Improve user experience / usability.',
    value: 'feat',
  },
  {
    emoji: '🏗️',
    name: '🏗️    Make architectural changes.',
    value: 'refactor',
  },
  {
    emoji: '📱',
    name: '📱   Work on responsive design.',
    value: 'feat',
  },
  {
    emoji: '🤡',
    name: '🤡   Mock things.',
    value: 'test',
  },
  {
    emoji: '🥚',
    name: '🥚   Add or update an easter egg.',
    value: 'feat',
  },
  {
    emoji: '🙈',
    name: '🙈   Add or update a .gitignore file.',
    value: 'chore',
  },
  {
    emoji: '📸',
    name: '📸   Add or update snapshots.',
    value: 'test',
  },
  {
    emoji: '⚗️',
    name: '⚗️    Perform experiments.',
    value: 'chore',
  },
  {
    emoji: '🔍️',
    name: '🔍️   Improve SEO.',
    value: 'feat',
  },
  {
    emoji: '🏷️',
    name: '🏷️    Add or update types.',
    value: 'refactor',
  },
  {
    emoji: '🌱',
    name: '🌱   Add or update seed files.',
    value: 'chore',
  },
  {
    emoji: '🚩',
    name: '🚩   Add, update, or remove feature flags.',
    value: 'chore',
  },
  {
    emoji: '🥅',
    name: '🥅   Catch errors.',
    value: 'fix',
  },
  {
    emoji: '💫',
    name: '💫   Add or update animations and transitions.',
    value: 'feat',
  },
  {
    emoji: '🗑️',
    name: '🗑️    Deprecate code that needs to be cleaned up.',
    value: 'chore',
  },
  {
    emoji: '🛂',
    name: '🛂   Work on code related to authorization, roles and permissions.',
    value: 'feat',
  },
  {
    emoji: '🩹',
    name: '🩹   Simple fix for a non-critical issue.',
    value: 'fix',
  },
  {
    emoji: '🧐',
    name: '🧐   Data exploration/inspection.',
    value: 'test',
  },
  {
    emoji: '⚰️',
    name: '⚰️    Remove dead code.',
    value: 'chore',
  },
  {
    emoji: '🧪',
    name: '🧪   Add a failing test.',
    value: 'test',
  },
  {
    emoji: '👔',
    name: '👔   Add or update business logic.',
    value: 'refactor',
  },
  {
    emoji: '🩺',
    name: '🩺   Add or update health check.',
    value: 'feat',
  },
  {
    emoji: '🧱',
    name: '🧱   Infrastructure related changes.',
    value: 'chore',
  },
  {
    emoji: '🧑‍💻',
    name: '🧑‍💻 Improve developer experience.',
    value: 'feat',
  },
  {
    emoji: '💸',
    name: '💸   Add sponsorships or money related infrastructure.',
    value: 'chore',
  },
  {
    emoji: '🧵',
    name: '🧵   Add or update code related to multithreading or concurrency.',
    value: 'feat',
  },
  {
    emoji: '🦺',
    name: '🦺   Add or update code related to validation.',
    value: 'feat',
  },
  {
    emoji: '✈️',
    name: '✈️    Improve offline support.',
    value: 'feat',
  },
]

export default gitmojis

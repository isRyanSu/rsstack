async function main() {
  try {
    Bun.spawnSync(['bun', 'changeset', 'status', '--output=status.json'])

    if (await Bun.file('status.json').exists()) {
      const status = JSON.parse(await Bun.file('status.json').text())

      const result = status.releases.map((release) => `${release.name}@${release.newVersion}`).join(', ')

      await Bun.file('status.json').delete()

      return result
    } else {
      return 'new version'
    }
  } catch {
    return 'new version'
  }
}

main().then(console.log)

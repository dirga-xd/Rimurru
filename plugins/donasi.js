let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomnyet [0812-8277-8090]
│ • Axis [0838-2112-3163]
╰────
╭─「 Donasi • Non Pulsa 」
│ • OVO, Dana [0838-2112-3163]
│ • https://trakteer.id/xlaw_xd
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

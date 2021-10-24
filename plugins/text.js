let handler = async m => m.reply(`
Sayonaraa 👋
`.trim()) // Tambah sendiri kalo mau
handler.command = /^blodwc$/i

module.exports = handler

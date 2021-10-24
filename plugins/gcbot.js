let handler = async m => m.reply(`
*⚠GRUP BOT⚠*

GA ADA GC COKKKK!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler

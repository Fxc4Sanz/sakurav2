let handler = m => m.reply('وعليكم السلام ورحمة الله وبركاته')

handler.customPrefix = /^(Assalamualaikum|assalamualaikum)$/i
handler.command = new RegExp

handler.register = true

module.exports = handler

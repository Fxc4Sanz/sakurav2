let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  await m.reply('*Sedang Diproses...*')
  let res = `https://api.zeks.xyz/api/sandw?apikey=Ze3af6X1SjJeUebhHUZCsHMeH13&text=${response}`
  conn.sendFile(m.chat, res, 'sandw.jpg', `Nih kak`, m, false)
}
handler.help = ['sandw'].map(v => v + ' <teks>')
handler.tags = ['anime']
handler.command = /^(sandw)$/i

module.exports = handler


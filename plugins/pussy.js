let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=fe3912c1406cbe694ac3b09b`
  conn.sendFile(m.chat, res, 'pussy.jpg', `Dih Sange Sama Gambar`, m, false)
}
handler.help = ['pussy'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(pussy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler


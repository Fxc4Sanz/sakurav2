let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/ero?apikey=a21ec307fc8cafb7`
  conn.sendFile(m.chat, res, 'ero.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['ero'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(ero)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler


let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/sfwneko?apikey=a21ec307fc8cafb7`
  conn.sendFile(m.chat, res, 'sfwneko.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['sfwneko'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(sfwneko)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler


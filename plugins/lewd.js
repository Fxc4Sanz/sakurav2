//By Johannes
//Jangan bully saya bang
//Saya Masih pemula 🗿

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.lolhuman.xyz/api/random2/lewd?apikey=HIRO`
  conn.sendFile(m.chat, res, 'lewd.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['lewd'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(lewd)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler


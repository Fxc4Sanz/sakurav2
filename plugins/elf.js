//By Johannes
//Jangan bully saya bang
//Saya Masih pemula ðŸ—¿

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.lolhuman.xyz/api/random/elf?apikey=fe3912c1406cbe694ac3b09b`
  conn.sendFile(m.chat, res, 'elf.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['elf'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(elf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler


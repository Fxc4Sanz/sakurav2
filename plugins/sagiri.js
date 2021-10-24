let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
     m.reply('Sedang Diproses...')
   conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/sagiri?apikey=ed79f3ce9ea04f4793308775', '', '', m, false)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^sagiri$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
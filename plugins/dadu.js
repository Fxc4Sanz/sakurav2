const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { readdirSync } = require('fs')
let handler  = async (m, { conn, args }) => {
  dir = ["https://storage.caliph71.xyz/dadu/v2/1.webp", "https://storage.caliph71.xyz/dadu/v2/2.webp", "https://storage.caliph71.xyz/dadu/v2/3.webp", "https://storage.caliph71.xyz/dadu/v2/4.webp", "https://storage.caliph71.xyz/dadu/v2/5.webp", "https://storage.caliph71.xyz/dadu/v2/6.webp"]
  random = dir[Math.floor(Math.random() * dir.length)]
  conn.sendFile(m.chat, `${random}`, 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['sticker', 'fun']
handler.command = /^dadu$/i

module.exports = handler
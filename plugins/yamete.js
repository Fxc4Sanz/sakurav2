let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let ara = fs.readFileSync('./audio/yamete.mp3') 
conn.sendMessage(m.chat, ara, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(Yamete kudasai)?$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler

let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
	let nani = 'https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg'
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = conn.sendButtonLoc(m.chat, await (await fetch(nani)).buffer(), text.trim(), '*𝗔𝗟𝗟 𝗖𝗛𝗔𝗧 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧*', 'OWNER', '.owner', m)
  for (let id of chats) conn.copyNForward(id, content, true)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 1
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let text = args.join` `
	fetch('https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=MIMINGANZ')
    	.then(res => res.json())
    	.then(json => {
    		conn.updatePresence(m.chat, Presence.composing) 
    		conn.reply(m.chat, `\`\`\`Tunggu sebentar . . .\`\`\``, m)
			conn.sendFile(m.chat, json.result.male, 'male.jpg', 'ini cowoknya', m)	
			conn.sendFile(m.chat, json.result.female, 'female.jpg', 'nih ceweknya',m)
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}
handler.help = ['ppcouple']
handler.tags = ['image']
handler.command = /^(ppcouple)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 15
module.exports = handler
let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let list = Object.entries(global.DATABASE.data.users)
	if(!args || !args[0]) {
		var exp = 0
	} else {
		var exp = parseInt(args[0])
	}
	list.slice(0, list.length).map(([user, data], i) => (Number(data.exp = exp)))
		conn.reply(m.chat, `*berhasil direset ${exp} / user*`, m)
}
handler.help = ['exp'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(resetexp)$/i

handler.rowner = true

module.exports = handler

let handler = async (m, {conn, command, text}) =>{
const { 
    WAConnection: _WAConnection } = require('@adiwajshing/baileys')
const simple  = require('../lib/simple.js');
const WAConnection = simple.WAConnection(_WAConnection);
m = simple.smsg(conn, m)
const TicTacToe = require("../lib/tictactoe")
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
// m.reply('[WIP Feature]')
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `
Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}
Ketik *nyerah* untuk nyerah
`.trim()
if (room.x !== room.o) m.reply(str, room.x, {
contextInfo: {
mentionedJid: conn.parseMention(str)
}
})
m.reply(str, room.o, {
contextInfo: {
mentionedJid: conn.parseMention(str)
}
})
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? `mengetik command dibawah ini
${prefix}${command} ${text}` : ''))
conn.game[room.id] = room
}
}
handler.command = /^(ttt|tictactoe)$/i
handler.grup = false
module.exports = handler

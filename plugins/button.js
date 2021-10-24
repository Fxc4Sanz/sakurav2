var {WAMessageProto} = require('@adiwajshing/baileys')
levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let fetch = require('node-fetch')
const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam'
				} else {
				ucapanWaktu = 'Selamat Malam'
				} 
let handler = async (m, { conn, command, text, usedPrefix }) => {
	//let nani = 'https://telegra.ph/file/bb4e04d8ab841bd0fe71f.png' 
heum = [
  "https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg",
  "https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg"
]
let nani = heum[Math.floor(Math.random() * heum.length)]
	
conn.send3ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `
_*${ucapanWaktu} ${conn.getName(m.sender)}*_

VC & CALL BOT = BLOCK
SPAM = BANNED + BLOCK

_*FOLLOW ME*_
_*https://www.instagram.com/assbq_k/*_

_*NO OWNER*_
_*http://wa.me/62895603352610*_

_*NOTE:*_
_*JIKA BUTTON NYA TIDAK BERFUNGSI SILAHKAN KETIK #allmenu*_
`.trim(), '_*Created By ©BiqqTzy*_', `LIST MENU`, `.allmenu`, `OWNER BOT`, `.owner`, `INFO BOT`, `#alive`)

}
handler.command = /^(menu)$/i

handler.register = true

module.exports = handler

function waktu(seconds) { 
seconds = Number(seconds); 
var d = Math.floor(seconds / (3600 * 24)); 
var h = Math.floor(seconds % (3600 * 24) / 3600); var m = Math.floor(seconds % 3600 / 60); 
var s = Math.floor(seconds % 60); 
var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : ""; 
var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : ""; 
var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : ""; 
var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : ""; 
return dDisplay + hDisplay + mDisplay + sDisplay; 
}
let { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs')
let handler = async (m, { conn }) => {
	
const ftoko = { key : { fromMe: false, participant : `0@s.whatsapp.net` },message: {orderMessage: { message: `Donasi Kak Agar Saya Bisa Beli Apikey`,thumbnail: fs.readFileSync("./src/logo.jpg")}}}
const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {


					"productMessage": {

						"product": {

							"productImage": {

								"url": "https://mmg.whatsapp.net/d/f/Am1sSqpVypFpsQawFUFkm4HgkPRqEx8rt32niyBmL4Wa.enc",

								"mimetype": "image/jpeg",

								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",

								"fileLength": "43344",

								"height": 1080,

								"width": 1080,

								"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",

								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",

								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",

								"mediaKeyTimestamp": "1612168223",

								"jpegThumbnail": global.thumbnail ? global.thumbnail : Buffer.alloc(0)

		},

							"productId": "3872465552870232",

							"title": `RP 9999999999`,

							"description" : `Battery : ${conn.battery ? `${conn.battery.value}%*\n ${conn.battery.live ? 'Charging' : 'Not Charged'}` : 'Not detected'} `,

	"productImageCount": 1

						},

						"businessOwnerJid": "994401636716@s.whatsapp.net"}}} 
						
						externalAdReply: {
                  }
let { name, limit, level, role, age, money, healt, premium, registered } = global.DATABASE.data.users[m.sender] 
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.sendButtonImg(m.chat, '┏━━⬣ 𝗗𝗢𝗡𝗔𝗦𝗜\n┃\n┃⬡ INDOSAT : 085804289247\n┃⬡ GOPAY : 6285804289247\n┃⬡ DANA : 6285804289247\n┗⬣', `${pp}`, `_*Created By ©BiqqTzy*_`.trim(), 'MENU', '#allmenu', { quoted: ftoko })

  }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

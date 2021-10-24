let fetch = require('node-fetch')
let handler  = async (m, { conn, text:sksk }) => {
  let text = sksk.replace('--withtag', '')
  let nani = 'https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg'
  let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
    let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n\n「 *BROADCAST* 」')
    freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `123456@broadcast` } : {}) }, message: {
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
								"mediaKeyTimestamp": "1612168223"
		},
							"productId": "3872465552870232",
							"title": "BROADCAST GROUP",
							"currencyCode": "IDR",
							"priceAmount1000": "50000000",
							"productImageCount": 1
						},
						"businessOwnerJid": "62895603352610@s.whatsapp.net"}}}
						    
  for (let id of groups) {
  metadatas = await conn.groupMetadata(id).catch(console.log)
  metadata = metadatas.participants.map(v => v.jid)
  mention = sksk.includes('--withtag') ? metadata : []
  if (m.quoted ? m.quoted.mtype == 'stickerMessage' : false) {
  conn.sendMessage(id, await m.quoted.download(), 'stickerMessage', { quoted: freply, contextInfo: { mentionedJid: mention } })
  } else if (m.mtype == 'conversation' || m.mtype == 'extendedTextMessage') {
  conn.sendButtonLoc(id, await (await fetch(nani)).buffer(), `*「 BROADCAST GROUP 」*\n\n${text}`, '', 'MENU', '#MENU', false ,{ contextInfo: { mentionedJid: mention }})
  } else conn.copyNForward(id, content)
  }
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
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
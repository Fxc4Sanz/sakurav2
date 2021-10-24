// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
m.reply('Sedang Diproses...')
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Tobat Kak', m)
}
handler.help = ['waifuj']
handler.tags = ['dewasa']
handler.command = /^waifuj$/i

module.exports = handler

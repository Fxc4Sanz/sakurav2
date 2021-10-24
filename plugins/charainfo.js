let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  await m.reply(global.wait)
  let { name, alternative_names, url, image_url } = json.results[0]
let charaingfo = `✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *Url*: ${url}`
  conn.sendFile(m.chat, image_url, '', charaingfo, m)
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
module.exports = handler

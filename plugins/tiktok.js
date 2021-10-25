let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let url = json.server_1 || json.info[0].videoUrl || ''
  if (!url) throw 'Gagal mengambil url download'
  let txt = json.info[0].text
  for (let hashtag of json.info[0].hashtags) txt = txt.replace(hashtag, '*$&*')
  await conn.sendFile(m.chat, url, 'tiktok.mp4', `
👤 *Username: ${json.info[0].authorMeta.nickName} (${json.info[0].authorMeta.name})*
▶️ *Views: ${json.info[0].playCount} Views*
💟 *Likes: ${json.info[0].diggCount} Likes*
🔁 *Shares: ${json.info[0].shareCount} Shares*
💌 *Comments: ${json.info[0].commentCount} Comments*
- *Desc:*
${txt}
  `.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler

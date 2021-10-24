const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} Beni_230`

  let res = await fetch(global.API('zekais', '/igs', { username: args[0] }))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profilehd, 'eror.jpg', `
» _*Nama: ${json.data.fullname}*_

» _*Bio: ${json.data.bio}*_

» _*Followers: ${json.data.follower}*_

» _*Following: ${json.data.following}*_

» _*Posts: ${json.data.timeline}*_

» _*Private: ${json.data.private ? 'Ya' : 'Tidak'}*_

Jangan Lupa Follow IG owner
https://www.instagram.com/assbq_k`, m, 0, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler

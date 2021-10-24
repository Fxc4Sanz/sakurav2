let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw `Contoh Penggunaan\n${usedPrefix}spamsms 628xxxxxxxx`
  let nomor = text.replace(/[^0-9]/gi, '').slice(2)
  if (!nomor.startsWith('8')) throw `Contoh Penggunaan\n${usedPrefix}spamcall 628xxxxxxxx`
  m.reply('_*Tunggu permintaan anda sedang diproses.....*_')
  let { result } = await fetch(`https://bsbt-api-rest.herokuapp.com/api/spamcall?number=${nomor}&apikey=benniismael`).then(a => a.json())
  m.reply(result)
  }
handler.help = ['spamcall <nomor>']
handler.tags = ['spam']
handler.command = /^(spamcall)$/i

handler.register = true

module.exports = handler
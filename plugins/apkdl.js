let imageToBase64 = require('image-to-base64');
let axios = require("axios");

let handler = async(m, { conn, text }) => {

try {
 m.reply('Sedang Diproses...')
    if (!text) return conn.reply(m.chat, 'Link Nya Mana? ', m)

    axios.get(`https://api.zeks.xyz/api/mediafire?apikey=WtFDjaVsjxjllanbZih51Hauc9I&url=${text}`).then ((res) => {
  let wait = `❒「  *Mediafire*  」\n\nData Berhasil Didapatkan\n❒ Nama File : ${res.data.name_file}\n❒ Link : ${res.data.download}\n❒ Size : ${res.data.file_size}\n❒ Dipublikasikan : ${res.data.upload_date}\n❒ Tipe : ${res.data.file_type}\n❒ Deskripsi :\n${res.data.description}\n\nFile sedang dikirim, harap tunggu sekitar 1 menit.`
  let file = res.data.download

  conn.reply(m.chat, wait, m)

  if (text.endsWith('.png/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.png', '', m, false, { asDocument: true })
  if (text.endsWith('.jpg/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.jpg', '', m, false, { asDocument: true })
  if (text.endsWith('.jpeg/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.jpeg', '', m, false, { asDocument: true })
  if (text.endsWith('.mp4/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.mp4', '', m, false, { asDocument: true })
  if (text.endsWith('.mp3/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.mp3', '', m, false, { asDocument: true })
  if (text.endsWith('.pdf/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.pdf', '', m, false, { asDocument: true })
  if (text.endsWith('.txt/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.txt', '', m, false, { asDocument: true })
  if (text.endsWith('.m4a/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.m4a', '', m, false, { asDocument: true })
  if (text.endsWith('.zip/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.zip', '', m, false, { asDocument: true })
  if (text.endsWith('.7z/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.7z', '', m, false, { asDocument: true })
  if (text.endsWith('.wav/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.wav', '', m, false, { asDocument: true })
  if (text.endsWith('.tga/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.tga', '', m, false, { asDocument: true })
  if (text.endsWith('.webp/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.webp', '', m, false, { asDocument: true })
  if (text.endsWith('.rar/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.rar', '', m, false, { asDocument: true })
  if (text.endsWith('.pptx/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.pptx', '', m, false, { asDocument: true })
  if (text.endsWith('.opus/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.opus', '', m, false, { asDocument: true })
  if (text.endsWith('.webm/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.webm', '', m, false, { asDocument: true })
  if (text.endsWith('.mkv/file')) return conn.sendFile(m.chat, file, res.data.name_file + '.mkv', '', m, false, { asDocument: true })

   }).catch(() => {
  m.reply('Server Erorr!')
})
 } catch (e) {
  m.reply('Mimetype tidak didukung!')
   }
}
handler.help = ['mediafire'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = /^(mediafire)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
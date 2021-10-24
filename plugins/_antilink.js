let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLink && link && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
  if (user.isAdmin || user.isSuperAdmin) return m.reply ('Karena Kamu Adalah Admin Group Bot tidak akan Kick Kamu')
 conn.sendButton(m.chat, `*「 ANTILINK DETECTOR 」*\nLink Gorup Terdeteksi Maaf *${name}* Kamu Telah Mengirim Link Group Kamu Akan Saya Kick :(`, 'Bye Bye', 'Sayonaraa 👋', '#blodwc', { quoted: m})
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler

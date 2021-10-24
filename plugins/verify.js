async function handler(m, { conn,text }) {
  conn.verify = conn.verify ? conn.verify : {}
   user = DATABASE.data.users
   kode = Math.floor(Math.random() * 9999)
   if (user[m.sender].registered) return m.reply('Kamu Sudah Terverifikasi!')
 aww = await m.reply('Kode Verifikasi Telah Dikirim Ke Chat Pribadi, Reply Pesan Dan Balas Pesan Ini Untuk Verifikasi!')
  m.reply(`Kode Verifikasi Anda Adalah *${kode}*\nJangan Berikan kepada Siapapun Maupun Owner!`, m.sender)
   conn.verify[m.sender] = { code: kode, key: aww.key.id }
}

handler.all = async m => {
     if (!conn.verify) return
     if (!m.quoted) return
    if ((m.sender in conn.verify) == false) return
    if (m.text == conn.verify[m.sender].code && m.quoted.id == conn.verify[m.sender].key) {
    conn.sendButton(m.chat, '```Register Success!```', '', 'MENU', '#menu', { quoted: m })
    DATABASE.data.users[m.sender].registered = true
    delete conn.verify[m.sender]
   }
}

handler.help = ['registered']
handler.tags = ['daftar']
handler.command = ['registered', 'register']
module.exports = handler
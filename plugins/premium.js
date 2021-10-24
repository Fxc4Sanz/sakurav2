let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
「 BUY PREMIUM 」

> KEUNTUNGAN :
• Limit UNLIMITED
• Fitur Premium Terbuka
• Bisa Memasukkan Bot Ke Dalam Group

> HARGA :
• 5K/perorang (Permanen)

> PEMBAYARAN :
❒ *PULSA*
❒ *GOPAY*
❒ *DANA*

◪ *Jika Minat Hubungi owner kami*
wa.me/62895603352610
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Minat?*\n*Jika Minat Silahkan Ketik #owner*', 'status@broadcast')
} 
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^(premium)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler
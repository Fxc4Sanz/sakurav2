let handler = async (m, { conn, text, participants }) => {
	conn.reply(m.chat, `
*「 LIST HARGA SEWA BOT 」*

❒ Sewa = _20k/grup (1 Bulan)_
❒ Sewa = _100k/grup (1 Tahun)_
❒ Sewa = _200k/group (Permanen)
❒ Free = _20 menit Bot Masuk Ke Group Kalian Setelah Itu Bot Akan Keluar_

◪ *PEMBAYARAN BISA MELALUI*

❒ _PULSA_
❒ _DANA_

◪ 𝙆𝙀𝙐𝙉𝙏𝙐𝙉𝙂𝘼𝙉 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏

❒ *Bisa Menyuruh Bot Buka/Tutup Group*
❒ *Kick Orang*
❒ *Add Orang*
❒ *Anti Link On*
❒ *Fitur Game Banyak Sepuas Nya Main*

◪ *Jika Minat Hubungi owner kami @6283806277620*

Ingin Jadi Bot Seperti ini?
ketik #jadibot
`, 'conversation', { quoted: m, contextInfo: { mentionedJid: ['6283806277620@s.whatsapp.net'], externalAdReply :{
sourceUrl: 'http://wa.me/+6283806277620?text=Kak+Sewa+Bot+Nya',
mediaType: 2,
title: 'Hai Kak 👋',
body: 'Mau Sewa Bot?',
thumbnailUrl: 'https://i.ibb.co/TYBsTsV/1890eb474e10.jpg',
}}})

}
handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^(sewabot)$/i

module.exports = handler
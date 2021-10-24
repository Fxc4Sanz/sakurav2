let fs = require ('fs')
let handler = async (m, { conn, text, participants }) => {
conn.reply(m.chat, `SAKURA BOT merupakan suatu program bot whatsapp, yang menggunakan Termux
Adapun ketentuan untuk memakai SAKURA BOT. :

*1.* Pengguna dapat menggunakan semua perintah/command dengan batasan limit sebanyak 10 setiap pengguna terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.
*2.* Dilarang Klik Button yg bertujuan nya tidak jelas
*3.* Bot dapat memblokir pengguna/user melanggar rules yang ada di bot ini, rules yang harus dipatuhi oleh pengguna antara lain :
  • Tidak melakukan panggilan telepon/video call terhadap Bot
  • Tidak melakukan spam perintah/command yang ada dalam bot ini
*4.* Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash
*5.* Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!\n\n_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

Nama Owner : BiqqTzy
Owner Bot: @6285804289247`, 'conversation', { quoted: m, contextInfo: { mentionedJid: ['6285804289247@s.whatsapp.net'], forwardingScore: 999, isForwarded: true, externalAdReply :{
mediaUrl: 'https://www.instagram.com/p/B7fNrb3JaecQGsvGKJuSR_jfpN_WQHz5ZVM_2o0/?utm_medium=copy_link',
mediaType: 2,
title: `Langgar Rules Block + Ban`,
body: ``,
thumbnail: await conn.getProfilePicture(conn.user.jid),
}}})

}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler

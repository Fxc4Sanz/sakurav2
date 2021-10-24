let handler = async (m, { conn, text, participants }) => {
conn.reply(m.chat, 'Ketik #menu untuk melihat menu bot', 'conversation', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://wa.me/6285804289247?text=Hai.com',
mediaType: 2,
title: 'Hai Kak 👋',
body: '_*Created By ©BiqqTzy*_',
thumbnailUrl: 'https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg',
}}}) 
}

handler.customPrefix = /^(p|P)?$/i
handler.command = new RegExp

module.exports = handler
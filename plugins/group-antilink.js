let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  await conn.send2Button(m.chat, 'Silahkan Pilih salah satu kak', 'Made By Johannes', 'Enable Antilink', '#on antilink', 'Disable Antilink', '#off antilink', { quoted: m, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply :{
mediaUrl: 'https://wa.me/62895603352610',
mediaType: 2,
title: '_silahkan pilih salah satu enable & disable_',
body: 'Made By Johannes',
thumbnailUrl: 'https://i.ibb.co/HTR3r8P/307737381d69.jpg'

}}})  
  
}
handler.help = ['antilink']
handler.tags = ['group']

handler.admin = true
handler.botAdmin = true

handler.command = /^(antilink)$/i
module.exports = handler

let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  await conn.send2Button(m.chat, 'Silahkan Pilih salah satu kak', 'Made By Johannes', 'Enable public', '#on public', 'Disable public', '#off public', { quoted: m, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply :{
mediaUrl: 'https://www.instagram.com/assbq_k/',
mediaType: 2,
title: 'silahkan pilih salah satu enable & disable',
body: '_*Created By ©BiqqTzy*_',
thumbnailUrl: 'https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg'
}}})  
}
handler.help = ['mode']
handler.tags = ['owner']

handler.owner = true

handler.command = /^(mode)$/i
module.exports = handler

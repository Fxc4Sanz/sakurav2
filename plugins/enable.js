let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':    
      chat.welcome = isEnable
      break
    case 'detect':
      chat.detect = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    case 'antidelete':
      chat.delete = !isEnable
      break
    case 'autodelvn':
      chat.autodelvn = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':  
      chat.antiLink = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
      case 'stiker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
      case 'troli':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antitroli = isEnable
      break
    default:
      return m.reply(`
List option:
welcome 
delete
public
antilink 
autolevelup 
detect

Contoh:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
  }
  conn.reply(m.chat, `
「 BERHASIL 」\n\n${type} Berhasil Di *${isEnable ? 'Nyala' : 'Mati'}kan* ${isAll ? 'Untuk Bot Ini' : isUser ? '' : 'Untuk Chat Ini'}
`.trim(), 'conversation', { quoted: m, contextInfo: { externalAdReply :{
sourceUrl: 'https://www.instagram.com/assbq_k',
mediaType: 2,
title: `FOLLOW MY INSTAGRAM`,
body: 'Created By ©BiqqTzy',
thumbnailUrl: 'https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg',
}}})
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i

handler.owner = true
handler.admin = false

module.exports = handler

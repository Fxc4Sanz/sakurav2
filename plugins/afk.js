let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
*「 AFK MODE 」*

𝗦𝘀𝘀𝘀𝘁𝘁, 𝗢𝗿𝗮𝗻𝗴𝗻𝘆𝗮 𝗹𝗮𝗴𝗶 𝗔𝗙𝗞, 𝗝𝗮𝗻𝗴𝗮𝗻 𝗱𝗶𝗴𝗮𝗻𝗴𝗴𝘂!!! 
🔰${conn.getName(m.sender)} 𝗦𝗲𝗸𝗮𝗿𝗮𝗻𝗴 𝗦𝗲𝗱𝗮𝗻𝗴 𝗔𝗙𝗞!!! 
🔰𝗔𝗹𝗮𝘀𝗮𝗻 : ${text ? '' + text : ''}
`)
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler
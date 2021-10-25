let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  let res = `https://api.xteam.xyz/randomimage/hentai?apikey=a21ec307fc8cafb7`
  conn.sendFile(m.chat, res, 'darkjokes.jpg', `Gelap Bangg`, m, false)
}
handler.help = ['darkjokes']
handler.tags = ['image']
handler.command = /^(dragjoles|darkjokes)$/i

module.exports = handler


let fetch = require('node-fetch')
let util = require('util')
let handler = async (m, { text }) => {
  let res = await fetch(`https://api.xteam.xyz/cekey?APIKEY=FuzBot1`)
  if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, text, 'file', text, m)
  let txt = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
  } finally {
    m.reply(txt.slice(0, 65536) + '')
  }
}
handler.help = ['cekapikey']
handler.tags = ['owner']
handler.command = /^(cekapikey)$/i

handler.owner = true

module.exports = handler
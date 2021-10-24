let syntaxerror = require('syntax-error')
let util = require('util')

let handler  = async (m, _2) => {
  let { conn, usedPrefix, command, text, noPrefix, args, groupMetadata } = _2
  let _return
  let _syntax = ''
  let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix
  let old = m.exp * 1 
  try {
    let i = 15
    let f = {
      exports: {}
    }
    let exec = new (async () => {}).constructor('print', 'm', 'handler', 'require', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument', _text)
    _return = await exec.call(conn, (...args) => {
      if (--i < 1) return
      console.log(...args)
      return conn.reply(m.chat, util.format(...args), 'conversation', { quoted: m, contextInfo: { mentionedJid: ['62895603352610@s.whatsapp.net'], externalAdReply :{
sourceUrl: 'http://wa.me/+6285804289247?text=Hai',
mediaType: 2,
title: 'Hai Kak 👋',
body: '',
thumbnailUrl: 'https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg',
}}})
    }, m, handler, require, conn, CustomArray, process, args, groupMetadata, f, f.exports, [conn, _2])
  } catch (e) {
    let err = await syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true
    })
    if (err) _syntax = '```' + err + '```\n\n'
    _return = e
  } finally {
    conn.reply(m.chat, _syntax + util.format(_return), 'conversation', { quoted: m, contextInfo: { mentionedJid: ['62895603352610@s.whatsapp.net'], externalAdReply :{
sourceUrl: 'http://wa.me/+6285804289247?text=Hai',
mediaType: 2,
title: 'Hai Kak 👋',
body: '',
thumbnailUrl: 'https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg',
}}})
    m.exp = old
  }
}
handler.help = ['> ', '=> ']
handler.tags = ['advanced']
handler.customPrefix = /^=?> /
handler.command = /(?:)/i
handler.rowner = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
    else return super(...args)
  }
}

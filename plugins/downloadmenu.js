let fetch = require('node-fetch');
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {    
    let { name, money, limit, exp, lastclaim, registered, regTime, age, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let math = max - xp
  let Johannes =  'https://i.ibb.co/wpWpVNd/avatar-contact.png'
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {
    Johannes = await conn.getProfilePicture(m.sender)
    pp = await conn.getProfilePicture(conn.user.jid)
  } catch (e) {

  } finally {
    let str = `
┌── ❬ USER PROFILE ❭
│
│✎ *Nama :* ${name}
│✎ *Umur:* ${age}
│✎ *Xp Mu:* ${exp}
│✎ *Limit :* ${limit}
│✎ *Level :* ${level}
│✎ *Money:* ${money}
│
└────────────┈ ⳹ ❋ཻུ۪۪⸙

┌── ❬ DOWNALOD MENU ❭
│
│✎ ${usedPrefix}fb <link>
│✎ ${usedPrefix}ig <link>
│✎ ${usedPrefix}joox <judul>
│✎ ${usedPrefix}play <judul>
│✎ ${usedPrefix}spotify <judul>
│✎ ${usedPrefix}ytmp3 <link>
│✎ ${usedPrefix}ytmp4 <link>
│
└────────────┈ ⳹ ❋ཻུ۪۪⸙

┌─ ❬ THANKS TO ❭
│
│✎ *Nurotomo*
│✎ *Ariffb25*
│✎ *Johannes*
│✎ *Aria Putra*
│✎ *Raku*
│✎ *All Penyedia Api*
│
└────────────┈ ⳹ ❋ཻུ۪۪

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, Johannes, 'pp.jpg', str.trim(), { key: { remoteJid: '0@s.whatsapp.net' }, message: { imageMessage: { caption: 'By : Johannes', jpegThumbnail: await (await fetch(pp)).buffer() }}})
  }
}
handler.help = ['downloadmenu']
handler.command = /^(downloadmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


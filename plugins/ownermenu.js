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

┌── ❬ OWNER MENU ❭
│
│✎ ${usedPrefix}addprem <@user>
│✎ ${usedPrefix}banchat
│✎ ${usedPrefix}ban
│✎ ${usedPrefix}block <@user>
│✎ ${usedPrefix}blocklist
│✎ ${usedPrefix}bc <teks>
│✎ ${usedPrefix}bcgc <teks>
│✎ ${usedPrefix}bugs <linkgroup>
│✎ ${usedPrefix}clearchat <chat|group|all>
│✎ ${usedPrefix}deletechat <chat|group|all>
│✎ ${usedPrefix}mutechat <chat|group|all>
│✎ ${usedPrefix}colong
│✎ ${usedPrefix}delprem <@user>
│✎ ${usedPrefix}on <opsi>
│✎ ${usedPrefix}off <opsi]
│✎ ${usedPrefix}leavegc & ${usedPrefix}leavegcall
│✎ ${usedPrefix}oadd <62895xxxxxxxxx>
│✎ ${usedPrefix}odemote <@user>
│✎ ${usedPrefix}okick <@user>
│✎ ${usedPrefix}ohidetag <teks>
│✎ ${usedPrefix}opromote <@user>
│✎ ${usedPrefix}premlist
│✎ ${usedPrefix}resetlimit
│✎ ${usedPrefix}resetexp 
│✎ ${usedPrefix}restart
│✎ ${usedPrefix}setbotbio <teks>
│✎ ${usedPrefix}setbotname <teks>
│✎ ${usedPrefix}setbye <teks>
│✎ ${usedPrefix}setmenu <teks>
│✎ ${usedPrefix}setmenubefore <teks>
│✎ ${usedPrefix}setmenuheader <teks>
│✎ ${usedPrefix}setmenubody <teks>
│✎ ${usedPrefix}setmenufooter <teks>
│✎ ${usedPrefix}setmenuafter <teks>
│✎ ${usedPrefix}setprefix <prefix>
│✎ ${usedPrefix}setwelcome <teks>
│✎ ${usedPrefix}unbanchat
│✎ ${usedPrefix}unban <@user>
│✎ ${usedPrefix}unblock <@user>
│✎ ${usedPrefix}unwarn @mention
│✎ ${usedPrefix}warn @mention
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
    conn.sendFile(m.chat, Johannes, 'pp.jpg', str.trim(), { key: { remoteJid: '0@s.whatsapp.net' }, message: { imageMessage: { caption: '*By : Johannes*', jpegThumbnail: await (await fetch(pp)).buffer() }}})
  }
}
handler.help = ['ownermenu']
handler.command = /^(ownermenu)$/i
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


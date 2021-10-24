let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {    
    let { name, money, limit, exp, lastclaim, registered, regTime, age, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let math = max - xp
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
  try {
    pp = await conn.getProfilePicture(who)
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

┌── ❬ GROUP MENU ❭
│
│✎ ${usedPrefix}add 6289xxxxxxx
│✎ ${usedPrefix}afk <alasan>
│✎ ${usedPrefix}demote @user
│✎ ${usedPrefix}on <opsi>
│✎ ${usedPrefix}off <opsi>
│✎ ${usedPrefix}getpp @user
│✎ ${usedPrefix}getsider
│✎ ${usedPrefix}group <open/close>
│✎ ${usedPrefix}infogrup
│✎ ${usedPrefix}kick @user
│✎ ${usedPrefix}leave
│✎ ${usedPrefix}linkgroup
│✎ ${usedPrefix}listadmin
│✎ ${usedPrefix}online
│✎ ${usedPrefix}revoke <reset linkgc>
│✎ ${usedPrefix}hidetag <teks>
│✎ ${usedPrefix}promote @user
│✎ ${usedPrefix}tagall
│✎ ${usedPrefix}totalpesan
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
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['grupmenu']
handler.tags = ['main']
handler.command = /^(grupmenu)$/i
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


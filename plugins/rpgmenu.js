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

┌── ❬ RPG MENU ❭
│
│✎ ${usedPrefix}adventure
│✎ ${usedPrefix}berburu
│✎ ${usedPrefix}mancing
│✎ ${usedPrefix}open <crate>
│✎ ${usedPrefix}gacha <create>
│✎ ${usedPrefix}shop <sell|buy> <args>
│✎ ${usedPrefix}feed <pet type>
│✎ ${usedPrefix}levelup
│✎ ${usedPrefix}hunt
│✎ ${usedPrefix}kolam
│✎ ${usedPrefix}kandang
│✎ ${usedPrefix}transfer
│✎ ${usedPrefix}heal
│✎ ${usedPrefix}use <item> <jumlah>
│✎ ${usedPrefix}pasar <jual> <args> 
│✎ ${usedPrefix}inv
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
handler.help = ['rpgmenu']
handler.tags = ['main']
handler.command = /^(rpgmenu)$/i
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


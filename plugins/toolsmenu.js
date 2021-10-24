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

┌── ❬ TOOLS MENU ❭
│
│✎ ${usedPrefix}barcode
│✎ ${usedPrefix}base64
│✎ ${usedPrefix}calc <number>
│✎ ${usedPrefix}carigrup <pencarian>
│✎ ${usedPrefix}caripesan <pesan>|<jumlah>
│✎ ${usedPrefix}caristicker <pencarian>
│✎ ${usedPrefix}cersex
│✎ ${usedPrefix}fitnah <teks> @user <teks>
│✎ ${usedPrefix}hackweb <judul|desk|wm|url>
│✎ ${usedPrefix}img2url
│✎ ${usedPrefix}inspect <linkgrup>
│✎ ${usedPrefix}ip <alamat ip>
│✎ ${usedPrefix}maps <wilayah>
│✎ ${usedPrefix}profile @user
│✎ ${usedPrefix}say <teks>
│✎ ${usedPrefix}tinyurl <url>
│✎ ${usedPrefix}yts <pencarian>
│✎ ${usedPrefix}zodiak 2006 03 28
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
handler.help = ['toolsmenu']
handler.command = /^(toolsmenu)$/i
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


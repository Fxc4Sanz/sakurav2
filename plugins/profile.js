let fs = require('fs')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    if (typeof global.DATABASE.data.users[who] == "undefined") {
      global.DATABASE.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        call: 0,
        role: 'Newbie ㋡',
        autolevelup: false,
        pc: 0,
      }
    }
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role, banned } = global.DATABASE.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let str = `
❏ *U S E R  P R O F I L E*

*›› NAMA : @${who.replace(/@.+/, '')}${about != 401 ? '*\n\n*›› INFO : ' + about : ''}*

*›› NOMOR : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*

*›› LINK : https://wa.me/${who.split`@`[0]}${registered ? '*\n\n›› *UMUR : ' + age : ''}*

*›› XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]*

*›› LEVEL : ${level}*

*›› ROLE : ${role}*

*›› LIMIT : ${limit}*

*›› TERDAFTAR : ${registered ? '☑️' : '❎'}*

*›› BANNED : ${banned ? 'True' : 'False'}*
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', banned ? 'banned' : str, m, false, { sendEphemeral: true, thumbnail: fs.readFileSync('./src/error.png'), contextInfo: { mentionedJid } })
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^(profil|profile|me)$/i
module.exports = handler

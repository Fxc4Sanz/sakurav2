let moment = require ('moment-timezone')
let handler = async (m, { conn, args }) => {
  let { name } = global.DATABASE.data.users[m.sender] 
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  let usersExp = sortedExp.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedExp.length)
  let text = `
━━━━━━━━━━━━━━━━━━━━
• *XP Leaderboard Top ${len}* •
Kamu: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*
━━━━━━━━━━━━━━━━━━━━
${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.exp + ' XP*').join`\n`}
━━━━━━━━━━━━━━━━━━━━
• *Money Leaderboard Top ${len}* •
Kamu: *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
━━━━━━━━━━━━━━━━━━━━
${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.money + ' Money*').join`\n`}
━━━━━━━━━━━━━━━━━━━━
• *Limit Leaderboard Top ${len}* •
Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*
━━━━━━━━━━━━━━━━━━━━
${sortedLim.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.limit + ' Limit*').join`\n`}
━━━━━━━━━━━━━━━━━━━━
`.trim()
  conn.reply(m.chat, text, m, { contextInfo: { mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersmoney.slice(0, len)], externalAdReply :{
mediaUrl: 'https://www.instagram.com/p/CEOnVoVAdXQ3V5KhCHm6fArQwc7msEgbbHuBjE0/?utm_medium=copy_link',
mediaType: 2,
title: `${ucapan()} ${ucapin()}`,
body: `${name}`,
thumbnailUrl: await conn.getProfilePicture(conn.user.jid),
}}})  
}

handler.help = ['leaderboard', 'lb']
handler.tags = ['xp']
handler.command = /^(leaderboard|lb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat Dini Hari"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    return res
}
function ucapin() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "🌃"
    if (time >= 4) {
        res = "🌄"
    }
    if (time > 10) {
        res = "☀️"
    }
    if (time >= 15) {
        res = "🌆"
    }
    if (time >= 18) {
        res = "🌉"
    }
    return res
}


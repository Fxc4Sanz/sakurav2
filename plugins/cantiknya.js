// srart24
let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
        conn.reply(m.chat, `\n*Yang paling cantik di sini adalah ${toM(a)}*\n`,  null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['tercantik']
handler.tags = ['quotes']
handler.command = /^(tercantik)$/i
handler.hit = true
module.exports = handler
// srart24
let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
        conn.reply(m.chat, `\n*Yang paling ganteng di sini adalah ${toM(a)}*\n`,  null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['terganteng']
handler.tags = ['quotes']
handler.command = /^(terganteng)$/i
handler.hit = true
module.exports = handler
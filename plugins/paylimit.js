let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) {
        conn.reply(m.chat, `perintah ini buat ngasih limit ke pengguna lain\n\ncontoh:\n${usedPrefix + command} @12086753126 10\natau balas pesan dengan perintah: ${usedPrefix + command} 10`, m, { contextInfo: { mentionedJid: ['12086753126@s.whatsapp.net'] } })
        throw false
    }
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.chat
    if (!who) {
        conn.reply(m.chat, `p: ini buat ngasih limit ke pengguna lain\n\ncontoh:\n${usedPrefix + command} @12086753126 10\natau balas pesan dengan perintah: ${usedPrefix + command} 10`, m, { contextInfo: { mentionedJid: ['12086753126@s.whatsapp.net'] } })
        throw false
    }
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
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'minimal 1'
    let users = global.DATABASE.data.users
    if (limit > users[m.sender].limit) throw 'Limit tidak mencukupi untuk mentransfer, ada pajaknya juga'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Pajak 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['paylimit @user <jumlah>']
handler.tags = ['xp']
handler.command = /^payl(imit)?$/

module.exports = handler

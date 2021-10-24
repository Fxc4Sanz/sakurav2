let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${usedPrefix}suit gunting\n\nkasih spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        conn.send3Button(m.chat, `Seri!\nKamu: ${text}\nBot: ${astro}`, 'SILAHKAN DI KLIK TOLONG JANGAN DI SPAM', 'BATU', '#suit batu', 'GUNTING', '#suit gunting', 'KERTAS', '#suit kertas',)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.DATABASE._data.users[m.sender].money += 50
            conn.send3Button(m.chat, `Kamu Menang! +Rp50\nKamu: ${text}\nBot: ${astro}`, 'SILAHKAN DI KLIK TOLONG JANGAN DI SPAM', 'BATU', '#suit batu', 'GUNTING', '#suit gunting', 'KERTAS', '#suit kertas',)
        } else {
            conn.send3Button(m.chat, `Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`, 'SILAHKAN DI KLIK TOLONG JANGAN DI SPAM', 'BATU', '#suit batu', 'GUNTING', '#suit gunting', 'KERTAS', '#suit kertas',)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.DATABASE._data.users[m.sender].money += 50
            conn.send3Button(m.chat, `Kamu Menang! +Rp50\nKamu: ${text}\nBot: ${astro}`, 'SILAHKAN DI KLIK TOLONG JANGAN DI SPAM', 'BATU', '#suit batu', 'GUNTING', '#suit gunting', 'KERTAS', '#suit kertas',)
        } else {
            conn.send3Button(m.chat, `Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`, 'SILAHKAN DI KLIK TOLONG JANGAN DI SPAM', 'BATU', '#suit batu', 'GUNTING', '#suit gunting', 'KERTAS', '#suit kertas',)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.DATABASE._data.users[m.sender].money += 50
            conn.send3Button(m.chat, `Kamu Menang! +Rp50\nKamu: ${text}\nBot: ${astro}`,  'SILAHKAN DI KLIK TOLONG JANGAN DI SPAM', 'BATU', '#suit batu', 'GUNTING', '#suit gunting', 'KERTAS', '#suit kertas',)
        } else {
            conn.send3Button(m.chat, `Kamu Malah!\nKamu: ${text}\nBot: ${astro}`,  'SILAHKAN DI KLIK TOLONG JANGAN DI SPAM', 'BATU', '#suit batu', 'GUNTING', '#suit gunting', 'KERTAS', '#suit kertas',)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.register = true
handler.limit = false

module.exports = handler

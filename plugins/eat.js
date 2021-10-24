let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
    let msgerror = (pickRandom(['ERROR', 'Astaga Error', 'Nice Error', 'Salah Format Sepertinya:v', 'Error Bro', 'Kocak Error:v', 'Wow Error :v', 'Ciaaa Error', 'Error Cuy', 'Dahlah ðŸ—¿ Error']))
    try {
        let msgkurang = (pickRandom(['apelmu Tidak Cukup', 'Ciaa Gak Cukup apelmu', 'Wow Gak Cukup :v', 'Beli apel Dulu, apel mu Gak Cukup', 'Duaarr apel mu Gak Cukup', 'Maap apel mu Kurang', 'Beli apel Dulu Lah, Masa Mau Pakai apel Tapi Ga Ada apelnnya :v', 'Minta Ke Orang Lain Suruh Transfer apel, Agar apel mu Gak Kurang:v', 'Beli apel Dulu KAKA']))
        let msgpenuh = (pickRandom(['Nyawamu Sudah Penuh', 'Coba Lihat .inv Mu, Nyawamu Sudah 100', 'Health mu Sudah Penuh', 'Udah Penuh Yaa', 'Nyawamu Telah Penuh :v', 'Udah Yaa, Udah Penuh']))
        let kucing = global.DATABASE.data.users[m.sender].kucing
        let apel = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
        let healt = global.DATABASE.data.users[m.sender].healt
        if (/eat|makan/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.DATABASE.data.users[m.sender].healt) / apel)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.DATABASE.data.users[m.sender].healt) / apel)), 1)
                 let msgsucces = (pickRandom(['Sukses Memakai', 'Nice Sukses Menggunakan', 'Berhasil Digunakan', 'Bagus Anda Menggunakan', 'Anda Memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* apel')
                 if (args[0] === 'apel') {
                    if (global.DATABASE.data.users[m.sender].healt < 100) {
                        if (global.DATABASE.data.users[m.sender].apel >= count * 1) {
                            global.DATABASE.data.users[m.sender].apel -= count * 1
                            global.DATABASE.data.users[m.sender].healt += apel * count
                            conn.reply(m.chat, msgsucces, m)
                        } else conn.reply(m.chat, msgkurang, m)
                    } else conn.reply(m.chat, msgpenuh, m)
                } else if (args.length > 2 && args[0] === !'apel') m.reply(pickRandom(['Hanya Bisa Menggunakan apel', 'Mau ngunain apa? Cuma bisa gunain apel :v', 'Wih mau gunain apa kamu, kan hanya bisa apel', 'Waduheck, hanya bisa apel', 'lah, mau gunain apa?, kan hanya bisa apel']) + '\nContoh penggunaan: *' + usedPrefix + 'apel 1*')
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        } else if (/eatall/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.DATABASE.data.users[m.sender].healt) / apel)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.DATABASE.data.users[m.sender].healt) / apel)), 1)
                let msgsucces = (pickRandom(['Sukses Memakai', 'Nice Sukses Menggunakan', 'Berhasil Digunakan', 'Primitif Anda Menggunakan', 'Anda Memakai', 'Anda Menggunakan']) + ' *' + (count * 1) + '* apel')
                if (global.DATABASE.data.users[m.sender].healt < 100) {
                    if (global.DATABASE.data.users[m.sender].apel >= count * 1) {
                        global.DATABASE.data.users[m.sender].apel -= count * 1
                        global.DATABASE.data.users[m.sender].healt += apel * count
                        conn.reply(m.chat, msgsucces, m)
                    } else conn.reply(m.chat, msgkurang, m)
                } else conn.reply(m.chat, msgpenuh, m)
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, msgerror, m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['use <item> <jumlah>', 'heal']
handler.tags = ['rpg']
handler.command = /^(eat|eatall)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

let speed = require('performance-now')
let handler = async (m, { conn }) => {
            const formater1 = (seconds) => {
                    const pad1 = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }                   
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return '  ' + pad1(hrs) + ' : ' + pad1(mins) + ' : ' + pad1(secs)
                }
            const uptime1 = process.uptime()
            const timestampi = speed();
            const latensip = speed() - timestampi
			conn.reply(m.chat, `BOT ONLINE SELAMA\n ${formater1(uptime1)}`, 'conversation', { quoted: m, contextInfo: { externalAdReply :{
sourceUrl: 'https://wa.me/62895603352610?text=Hai',
mediaType: 2,
title: `Runtime : ${formater1(uptime1)}`,
body: 'Ayane Shirakawa By Johannes',
thumbnailUrl: await conn.getProfilePicture(conn.user.jid),
}}})
        }
        
handler.help = ['runtime']
handler.tags = ['info', 'tools']

handler.command = /^(runtime)$/i
module.exports = handler 
let handler = async (m) => {
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)
}
handler.help = ['bkp']
handler.tags = ['18+']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
module.exports = handler

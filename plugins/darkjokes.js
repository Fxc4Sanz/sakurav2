let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'a21ec307fc8cafb7'), '', 'drag joles',m)
}
handler.help = ['darkjokes']
handler.tags = ['image']
handler.command = /^(dragjoles|darkjokes)$/i

module.exports = handler

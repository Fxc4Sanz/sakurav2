let { MessageType } = require('@adiwajshing/baileys')
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let parent = args[0] && args[0] == 'plz' ? conn : global.arifi
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.arifi.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new global.arifi.constructor()
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
      auth = true
    }
    conn.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik', m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    conn.on ('open', async () => {
    console.log ('credentials update')
    const authInfo = conn.base64EncodedAuthInfo()
     })
    conn.connect().then(async ({ user }) => {
      parent.reply(m.chat, 'Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2), m)
      
      if (auth) return
      await parent.sendMessage(user.jid, `Kamu bisa login tanpa qr dengan pesan dibawah ini. untuk mendapatkan kode lengkapnya, silahkan kirim *${usedPrefix}getcode* untuk mendapatkan kode yang akurat`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    conn.on('chat-update', async (message) => {
    require('./command/direct.js')(conn, message)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }, 60000)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state != 'close') return
          if (conn.user && conn.user.jid)
            parent.sendMessage(conn.user.jid, `Koneksi terputus...`, MessageType.extendedText)
          let i = global.conns.indexOf(conn)
          if (i < 0) return
          delete global.conns[i]
          global.conns.splice(i, 1)
        } catch (e) { conn.logger.error(e) }
      }, 30000)
    })
    global.conns.push(conn)
  } else throw 'Tidak bisa membuat bot didalam bot!\n\nhttps://wa.me/' + global.arifi.user.jid.split`@`[0] + '?text=.jadibot'
}
handler.command = /^(jadibot|buatbot)$/i
handler.owner = true
module.exports = handler

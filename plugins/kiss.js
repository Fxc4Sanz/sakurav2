let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://tobz-api.herokuapp.com/api/kiss?apikey=Tobzzz17')
  let json = await res.json()
  let { 
result
} = json
let stiker = await sticker(null, result, 'Kiss', 'Punya Sabiq <3')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['kiss']
handler.tags = ['sticker']
handler.command = /^kiss/i

module.exports = handler

let fs = require ('fs')
const { createHash } = require('crypto') 
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
let { performance } = require('perf_hooks')
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  let pepe = 'https://i.ibb.co/ZWzygtN/bbb2ed6426c6.jpg'
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah!\nContoh: *${usedPrefix}daftar Sabiq|16*`
  let [_, name, splitter, age] = text.match(Reg)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let totalreg = Object.keys(global.DATABASE._data.users).length
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 70) throw 'Umur Terlalu Tua'
  if (age < 5) throw 'Bayi Bisa Ngetik Sesuai Format Bjir ._.'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
╰┬────────────┈ ⳹
┌┤◦➛ *Nama* : ${name}
││◦➛ *Nomor* : ${who.split`@`[0]}
││◦➛ *Umur* : ${age} Tahun
││◦➛ *SN* : ${sn}
││◦➛ *Total Reg* : ${totalreg} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│╰────────────┈ ⳹
│ *Silahkan Ketik .menu*
│ *Untuk Melanjutkan*
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙

*「 Sakura さくら 」*
`.trim()
var _0x159381=_0x1c85;function _0x2bc0(){var _0x2cc185=['5ZCyNCs','2320326cXAjvk','962213DnbvqZ','RakuGans','6658112zENtvS','556468DXlqBN','168449dJwLCA','9eJlSHO','6882650LxQmqp','chat','reply','status@broadcast','6UliCqJ','sender','10344048EVjhmf','8whyjfr','0@s.whatsapp.net'];_0x2bc0=function(){return _0x2cc185;};return _0x2bc0();}function _0x1c85(_0x402d4e,_0xded898){var _0x2bc073=_0x2bc0();return _0x1c85=function(_0x1c8567,_0x54d15b){_0x1c8567=_0x1c8567-0x98;var _0x39945c=_0x2bc073[_0x1c8567];return _0x39945c;},_0x1c85(_0x402d4e,_0xded898);}(function(_0xbd4baa,_0x448eb6){var _0x4f7c20=_0x1c85,_0x4cd3be=_0xbd4baa();while(!![]){try{var _0x30385a=parseInt(_0x4f7c20(0xa3))/0x1*(-parseInt(_0x4f7c20(0x9b))/0x2)+parseInt(_0x4f7c20(0x9e))/0x3+parseInt(_0x4f7c20(0xa2))/0x4*(-parseInt(_0x4f7c20(0x9d))/0x5)+parseInt(_0x4f7c20(0x98))/0x6*(-parseInt(_0x4f7c20(0x9f))/0x7)+-parseInt(_0x4f7c20(0xa1))/0x8+parseInt(_0x4f7c20(0xa4))/0x9*(parseInt(_0x4f7c20(0xa5))/0xa)+parseInt(_0x4f7c20(0x9a))/0xb;if(_0x30385a===_0x448eb6)break;else _0x4cd3be['push'](_0x4cd3be['shift']());}catch(_0x2f94f0){_0x4cd3be['push'](_0x4cd3be['shift']());}}}(_0x2bc0,0x973af),await conn[_0x159381(0xa7)](m[_0x159381(0xa6)],caption,{'key':{'participant':_0x159381(0x9c),'remoteJid':_0x159381(0xa8)},'message':{'orderMessage':{'itemCount':0x3e7,'status':0x3e7,'thumbnail':await(await fetch(pepe))['buffer'](),'surface':0x3e7,'message':'VERIFICATION\x20BERHASIL','orderTitle':_0x159381(0xa0),'sellerJid':'0@s.whatsapp.net'}}},{'contextInfo':{'mentionedJid':[m[_0x159381(0x99)]]}}));
}
handler.help = ['daftar <nama|umur>','register <nama|umur>']
handler.tags = ['daftar']
handler.command = /^daftar|register$/i

module.exports = handler
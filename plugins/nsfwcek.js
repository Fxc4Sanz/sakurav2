const uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let handler  = async (m, { conn }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'silahkan reply gambar/foto'
  let media = await q.download()
  let url = await uploadImage(media)
   let res = await fetch(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=HIRO&img=${url}`)
    let json = await res.json()
    let gg = await json.result
     m.reply(gg)
} 

	handler.help = ['ceknsfw <reply foto>']
	handler.tags = ['tools']
  handler.command = /^(ceknsfw)/i
   
  module.exports = handler
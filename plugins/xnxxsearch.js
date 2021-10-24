let axios = require("axios")
const { fetchJson } = require('../lib/fetch')
let handler = async (m, { conn, text }) => {
get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=HIRO&query=${q}`)
reply(mess.wait)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Duration : ${x.duration}\n`
ini_txt += `Uploader : ${x.uploader}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
conn.reply(ini_txt, get_result)
   }
handler.tags = ['premium']
handler.command = /^(xnxxsearch|searchxnxx|xnxx)$/
handler.help = ['xnxxsearch <pencarian>']
handler.premium = true
module.exports = handler

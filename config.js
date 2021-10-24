let fs = require('fs')
global.DeveloperMode = 'false' //true Or false
global.owner = ['6285804289247'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  rikka: 'https://rikka-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://rikka-api.herokuapp.com': 'beta',
  'https://pencarikode.xyz': 'pais',
  'https://api.lolhuman.xyz': 'HIRO',
  'https://api.xteam.xyz': 'a21ec307fc8cafb7',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'ASJJMOFsjrVE8eZq1jgtGL4rGVE',
}

// Sticker WM
global.packname = 'Punya Sabiq <3'
global.author = 'Ig: assbq_k'

global.wait = '*Tunggu Sebentar Ya Sayang*'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

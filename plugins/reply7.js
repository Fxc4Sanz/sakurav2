let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Yuli')) { 
this.reply(m.chat ,`Cantikk Sihh, Tapii Galak Banget Kek....?🤣`.trim(), m)
} 

}
module.exports = handler
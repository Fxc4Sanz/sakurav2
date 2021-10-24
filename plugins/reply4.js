let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Alexa')) { 
this.reply(m.chat ,`Anak Opet Cantik Banget Gada Obat:v`.trim(), m)
} 

}
module.exports = handler
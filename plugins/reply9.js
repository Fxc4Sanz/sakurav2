let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Anya')) { 
this.reply(m.chat ,`Subhanallah Ini Orang Cantik Banget:v`.trim(), m)
} 

}
module.exports = handler
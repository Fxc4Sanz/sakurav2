let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Gita')) { 
this.reply(m.chat ,`Cantikknya Biasa Aja sii, Karena lu Ratu Bucin:v`.trim(), m)
} 

}
module.exports = handler
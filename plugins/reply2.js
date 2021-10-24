let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Hallo')) { 
this.reply(m.chat ,`Allo`.trim(), m)
} 

}
module.exports = handler
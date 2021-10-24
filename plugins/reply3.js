let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Hii')) { 
this.reply(m.chat ,`Hai`.trim(), m)
} 

}
module.exports = handler
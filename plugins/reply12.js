let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Shara')) { 
this.reply(m.chat ,`Cantiknya Adenya Alexo & Kaka Ibel>_<`.trim(), m)
} 

}
module.exports = handler
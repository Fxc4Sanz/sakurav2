let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Sandrina')) { 
this.reply(m.chat ,`Ini Nih Ratu Drama Handall:v`.trim(), m)
} 

}
module.exports = handler
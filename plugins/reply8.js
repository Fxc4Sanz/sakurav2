let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Iqbal')) { 
this.reply(m.chat ,`Ganteng sii, Tpi maen ML masih Epic:v`.trim(), m)
} 

}
module.exports = handler
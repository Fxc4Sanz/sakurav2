let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Ibel')) { 
this.reply(m.chat ,`Inii Orang Apa Bukan Si, Kok Bisa Imut Banget>_<`.trim(), m)
} 

}
module.exports = handler
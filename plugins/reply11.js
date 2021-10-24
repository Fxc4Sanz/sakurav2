let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Kevin')) { 
this.reply(m.chat ,`Inii Nihh Orang Gans Cuman Kata Mak>_<`.trim(), m)
} 

}
module.exports = handler
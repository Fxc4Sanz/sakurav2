let handler = m => m

handler.all = async function (m) {
    let user = global.DATABASE._data.users[m.sender]
    if ((user.healt * 1) > 100) {
        user.healt = 100
    } else if ((user.money * 1) < 0) {
        user.healt = 0
    }
}

module.exports = handler

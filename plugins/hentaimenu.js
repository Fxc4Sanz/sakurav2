let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Nsfw Menu",
                        "description": "©Nsfw",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `Random NsfwNeko`,
                                        "rowId": ".nsfwneko"
                                    }, {
                                       "title": `Random Hentai Gif`,
                                       "rowId": ".hentaigif"
                                    }, {
                                       "title": `Random Hentai`,
                                       "rowId": ".hentai"
                                    }, {
                                       "title": `Random Pussy`,
                                        "rowId": ".pussy"
                                    }, {
                                        "title": `Random Ass`,
                                        "rowId": ".ass"                               
                                    }, { 
                                        "title": `Random Blowjob`,
                                        "rowId": ".blowjob"
                                    }, { 
                                        "title": `Random Trap`,
                                        "rowId": ".trap"   
                                    }, { 
                                        "title": `Random Ahegao`,
                                        "rowId": ".ahegao"
                                    }, { 
                                        "title": `Random Yuri`,
                                        "rowId": ".yuri"   
                                    }, { 
                                        "title": `Random Ecchi`,
                                        "rowId": ".ecchi"    
                                    }, { 
                                        "title": `Random Lewd`,
                                        "rowId": ".lewd"     
                                    }, { 
                                        "title": `Random Lewdholo`,
                                        "rowId": ".lewdholo"  
                                    }, { 
                                        "title": `Random SideOppai`,
                                        "rowId": ".sideoppai"      
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['hentaimenu']
module.exports = handler
handler.tags = ['main'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler
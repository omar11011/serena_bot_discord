const megadb = require('megadb')
const folder = new megadb.memoDB('temp-ban')

const load = async db => {
    const users = []
    const data = await db.trainer.findAll({ where: { ban: true }, attributes: ['user'] })
    for(let i = 0; i < data.length; i++) users.push(data[i].user)
    folder.establecer('data', users)
}

const isTempBan = async user => {
    const data = await folder.obtener('data') || []
    if(data.includes(user)) return true
    else return false
}

module.exports = {
    load: load,
    isTempBan: isTempBan,
}
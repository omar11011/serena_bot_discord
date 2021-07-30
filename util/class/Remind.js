const megadb = require('megadb')

const { join } = require('path')
const { readdir } = require('fs')

const client = require('./Client')
const findUser = require('../functions/findUser')
const sendEmbed = require('../functions/sendEmbed')

class Remind {

    constructor() {
        this.limit = 3
        this.folder = new megadb.crearDB('remind', 'data/')

        this.numReminds = async user => {
            const data = await this.folder.obtener(user) || []
            return data
        }

        this.addRemind = async object => {
            const num = await this.numReminds(object.user)
            if(num.length >= this.limit) return false
            
            num.push({ msg: object.msg, time: object.time })
            this.folder.establecer(object.user, num)
            return true
        }

        this.removeRemind = async (object, all = false) => {
            if(all) this.folder.eliminar(object.user)
            else {
                let position = null
                let data = await this.numReminds(object.user)

                for(let i = 0; i < data.length; i++) {
                    if(data[i].time == object.time) position = i
                }

                if(position != null) data.splice(position, 1)
                else return false

                if(data.length > 0) this.folder.establecer(object.user, data)
                else this.folder.eliminar(object.user)
            }

            return true
        }

        this.execAllRemind = async () => {
            const url = '../../app/'
            
            readdir(join(__dirname, url), (err, f) => {
                if(f.includes('mega_databases')) {
                    readdir(join(__dirname, url + 'mega_databases/'), (err, d) => {
                        if(d.includes('data')) {
                            readdir(join(__dirname, url + 'mega_databases/data/'), (err, c) => {
                                if(c.includes('remind.json')) {
                                    let data = []
                                    let file = require('../../app/mega_databases/data/remind.json')
                                    let users = Object.keys(file)

                                    for(let i = 0; i < users.length; i++) {
                                        for(let j = 0; j < file[users[i]].length; j++) data.push({ user: users[i], msg: file[users[i]][j].msg, time: file[users[i]][j].time })
                                    }

                                    setInterval(async () => {
                                        const time = Date.now()

                                        data.map(async e => {
                                            if(e.time <= time) {
                                                const user = findUser('', client, e.user)
                                                if(user) {
                                                    try {
                                                        const embed = {
                                                            author: '⏰ Recordatorio',
                                                            description: e.msg,
                                                            timestamp: true,
                                                        }
                                                        const content = sendEmbed('', embed, false)

                                                        user.send(content)
                                                    } catch {
                                                        console.log('No pude enviarle el recordatorio a ' + user.tag + '.')
                                                    }
                                                }
                                                await this.removeRemind(e)
                                            }
                                        })
                                        data = data.filter(e => {
                                            return e.time > time
                                        })
                                    }, 600000)

                                    return data
                                }
                            })
                        }
                    })
                }
            })
        }
    }

}

module.exports = new Remind()
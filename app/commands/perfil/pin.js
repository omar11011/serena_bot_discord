const Base = require('../../../util/class/Command')

const { join } = require('path')
const { readdir, readFileSync } = require('fs')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'pin'
        this.cooldown = 4
        this.description = 'Visualiza algún pin para tu perfil.'
        this.uses = [
            ['Visualizar un pin', '<pin>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = {  }
            const prefix = await server.getPrefix()
            const url = '../../../client/public/img/pin/'

            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' <pin>`')

            readdir(join(__dirname, url), async (err, folder) => {
                let exist = false
                let name = args.join(" ").toLowerCase() + '.png'
                folder.map(e => {
                    if(e.toLowerCase() == name) exist = true
                })
                if(!exist) {
                    embed.color = 'RED'
                    embed.description = '❌ Este pin no existe.'
                } else {
                    const has = await this.db.pin.findOne({ where: { pin: args.join(" ").toLowerCase() }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ], attributes: ['id'] })

                    embed.author = [message.author.tag, message.author.avatarURL()]
                    embed.description = has ? '☑️ Ya tienes este pin en tu inventario.' : '❌ Aún no has conseguido este pin.'
                    embed.files = {
                        attachment : readFileSync(join(__dirname, url + name)),
                        name: 'pin.png',
                    }
                }

                return this.sendEmbed(message, embed)
            })
        }
    }
}

module.exports = Command
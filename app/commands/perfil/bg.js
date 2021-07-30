const Base = require('../../../util/class/Command')

const { join } = require('path')
const { readdir, readFileSync } = require('fs')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'background'
        this.alias = ['bg']
        this.cooldown = 4
        this.description = 'Visualiza algún fondo para tu perfil.'
        this.uses = [
            ['Visualizar un fondo', '<fondo>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = {  }
            const prefix = await server.getPrefix()
            const url = '../../../client/public/img/bg/'

            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' <fondo>`')

            readdir(join(__dirname, url), async (err, folder) => {
                const name = args.join(" ").toLowerCase() + '.png'
                if(!folder.includes(name)) {
                    embed.color = 'RED'
                    embed.description = '❌ Este fondo no existe.'
                } else {
                    const has = await this.db.background.findOne({ where: { background: args.join(" ").toLowerCase() }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ], attributes: ['id'] })

                    embed.author = [message.author.tag, message.author.avatarURL()]
                    embed.description = has ? '☑️ Ya tienes este fondo en tu inventario.' : '❌ Aún no has conseguido este fondo.'
                    embed.files = {
                        attachment : readFileSync(join(__dirname, url + name)),
                        name: 'background.png',
                    }
                }

                return this.sendEmbed(message, embed)
            })
        }
    }
}

module.exports = Command
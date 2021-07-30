const Base = require('../../../util/class/Command')
const os = require('os')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'bot'
        this.description = 'Obtén información de ' + this.client.config.bot.name + '.'
        this.uses = [
            ['Información de ' + this.client.config.bot.name, ''],
        ]

        this.exec = async (message, args, server) => {
            const owner = []
            
            for(let i = 0; i < this.client.config.bot.owner.length; i++) {
                const user = message.guild.members.cache.get(this.client.config.bot.owner[i])
                if(user) owner.push('• ' + user.user.tag)
            }

            const embed = {
                author: ['Información de ' + this.client.config.bot.name, this.client.user.displayAvatarURL()],
                fields: [
                    { name: 'Versión', value: 'v' + this.client.package.version, inline: true },
                    { name: 'Lenguaje', value: 'JavaScript', inline: true },
                    { name: 'Desarrolladores', value: owner.join("\n"), inline: true },
                    { name: 'Librerías', value: '```' + Object.keys(this.client.package.dependencies).join("    ") + '```', inline: false },
                    { name: 'Sistema', value: '```• Sistema Operativo: ' + os.platform() + ' (' + os.release() + ')\n• Memoria: ' + os.freemem() + '/' + os.totalmem() + ' bytes```', inline: false },
                ],
                timestamp: true,
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
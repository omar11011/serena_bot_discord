const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'verify'
        this.alias = ['verificar']
        this.uses = [
            ['Verificar servidor', ''],
        ]

        this.exec = async (message, args, server) => {
            const user = await this.db.trainer.findOne({ where: { user: message.author.id }, attributes: ['rank'] })
            if(!user || user.rank == null) return
            if(user.rank === 1) return message.reply('no tienes permiso para utilizar este comando.')

            const breed = new this.breed(message.guild.id, message.author.id)
            const result = await breed.verify()
            if(!result) return message.reply('este servidor ya se encontraba verificado para la crianza.')

            message.react('☑️')
            
            const embed = {
                color: '#16A167',
                author: '☑️ ¡Servidor verificado!',
                description: message.author.tag + ' ha verificado al servidor `' + message.guild.name +'`, la crianza ahora está habilitada aquí.',
                channel: this.client.config.logs.public,
                timestamp: true,
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
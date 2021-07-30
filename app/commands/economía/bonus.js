const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'bonus'
        this.cooldown = 300
        this.description = 'Recibe un bono de pokécuartos por permanecer jugando.'
        this.uses = [
            ['Reclamar bonus', ''],
        ]
        this.ignoreCaptcha = false

        this.exec = async (message, args, server) => {
            const balance = await this.db.balance.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!balance) return message.reply('aún no estás registrado como entrenador pokémon.')

            const reward = 500
            const embed = {
                author: [message.author.tag, message.author.avatarURL()],
                description: '¡Felicidades! Has recibido ' + reward + ' pokécuartos.',
                timestamp: true,
            }

            await this.db.balance.increment({ money: +reward }, { where: { id: balance.trainerId } })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
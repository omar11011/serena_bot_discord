const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'work'
        this.alias = ['trabajar']
        this.cooldown = 50
        this.description = 'Realiza trabajos aleatorios para conseguir recompensas.'
        this.uses = [
            ['Recibir recompensa por trabajos', ''],
        ]
        this.ignoreCaptcha = false

        this.exec = async (message, args, server) => {
            const user = await this.db.balance.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!user) return message.reply('aún no estás registrado como entrenador pokémon.')

            const embed = {
                author: [message.author.tag, message.author.avatarURL()],
                description: this.randomOption() + ` Has recibido 100 pokécuartos.`,
                timestamp: true,
            }

            await this.db.balance.increment({ money: +100 }, { where: { trainerId: user.trainerId } })

            return this.sendEmbed(message, embed)
        }

        this.options = [
            'Trabajaste como investigador para restaurar unos raros fósiles.',
            'Ayudaste a preparar pokelitos.',
            'Sacaste a pasear a un grupo de Furfrous por la calle.',
            'Espantaste a unos Murkrow de un maizal.',
            'Trabajaste como asistente de cocina de un reconocido chef.',
        ]

        this.randomOption = () => {
            return this.options[Math.floor(Math.random() * this.options.length)]
        }
    }
}

module.exports = Command
const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'balance'
        this.alias = ['bal']
        this.cooldown = 5
        this.description = 'Obtén información sobre tu balance.'
        this.uses = [
            ['Información de tu balance', ''],
            ['Información del balance de un usuario', '<userId>'],
        ]

        this.exec = async (message, args, server) => {
            const user = this.findUser(message, this.client, args[0])
            if(!user) return message.reply('este usuario no está registrado como entrenador pokémon.')

            const data = await this.db.balance.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: user.id } } ] })
            if(!data) {
                if(user.id == message.author.id) return message.reply('aún no te has registrado como entrenador pokémon.')
                else return message.reply('este usuario aún no se ha registrado como entrenador pokémon.')
            }

            const embed = {
                color: '#16A167',
                author: [user.tag, user.avatarURL()],
                fields: [
                    { name: 'Pokécuartos', value: data.money, inline: true },
                    { name: 'Gemas', value: data.gems, inline: true },
                ],
                footer: 'Usa los comandos de economía para ganar más pokécuartos.'
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
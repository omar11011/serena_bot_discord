const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'start'
        this.cooldown = 5
        this.description = 'Inicia tu aventura como entrenador pokémon.'
        this.uses = [
            ['Registrarse como entrenador pokémon', ''],
        ]

        this.exec = async (message, args, server) => {
            const data = await this.db.trainer.findOne({ where: { user: message.author.id } })
            if(data) return message.reply('ya estabas registrado como entrenador pokémon.')

            try {
                this.db.trainer.create({
                    user: message.author.id,
                    name: message.author.tag,
                    date: new Date(),
                })
                    .then(async trainer => {
                        await this.db.balance.create({
                            trainerId: trainer.dataValues.id,
                        })
                    })

                const embed = {
                    color: '#16A167',
                    author: [message.author.tag, message.author.avatarURL()],
                    description: `🖥️  ¡Registro exitoso!`,
                    footer: 'Ahora debes elegir una región, usa el comando ' + await server.getPrefix() + 'region'
                }
                
                return this.sendEmbed(message, embed)
            } catch(err) {
                return this.log.error(err)
            }
        }
    }
}

module.exports = Command
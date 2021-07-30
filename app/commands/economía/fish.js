const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'fish'
        this.alias = ['pescar']
        this.cooldown = 45
        this.description = 'Obtén recompensas por pescar.'
        this.uses = [
            ['Pescar', ''],
        ]
        this.ignoreCaptcha = false

        this.exec = async (message, args, server) => {
            const user = await this.db.balance.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!user) return message.reply('aún no estás registrado como entrenador pokémon.')

            let reward = []
            let random = Math.ceil(Math.random() * 100)

            if(random <= 50) reward = this.reward[0]
            else if(random > 50 && random <= 80) reward = this.reward[1]
            else if(random > 80 && random <= 95) reward = this.reward[2]
            else reward = this.reward[3]

            const pokemon = reward.pokemon[Math.floor(Math.random() * reward.pokemon.length)]
            const embed = {
                author: [message.author.tag, message.author.avatarURL()],
                description: `¡Felicidades, parece que tuviste una buena pesca!`,
                fields: [
                    { name: 'Pokemon', value: pokemon, inline: true },
                    { name: 'Recompensa', value: reward.price + ' Pokécuartos', inline: true },
                ],
                timestamp: true,
            }

            await this.db.balance.increment({ money: +reward.price }, { where: { trainerId: user.trainerId } })

            return this.sendEmbed(message, embed)
        }

        this.reward = [
            {
                pokemon: ['Wishiwashi', 'Tynamo', 'Remoraid'],
                price: 50,
            },
            {
                pokemon: ['Goldeen', 'Magikarp', 'Carvanha', 'Finneon'],
                price: 100,
            },
            {
                pokemon: ['Seaking', 'Lumineon', 'Octillery'],
                price: 150,
            },
            {
                pokemon: ['Sharpedo', 'Relicanth', 'Gyarados'],
                price: 250,
            }
        ]
    }
}

module.exports = Command
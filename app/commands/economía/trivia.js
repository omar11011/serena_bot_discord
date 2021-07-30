const Base = require('../../../util/class/Command')

const { MessageCollector } = require('discord.js')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'trivia'
        this.cooldown = 60
        this.description = 'Obtén recompensas resolviendo el nombre del pokémon misterioso que se te mostrará.'
        this.uses = [
            ['Jugar a la trivia', ''],
        ]
        this.ignoreCaptcha = false

        this.exec = async (message, args, server) => {
            const balance = await this.db.balance.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!balance) return message.reply('no estás registrado como entrenador pokémon.')

            const data = { response: false, pokemon: this.pokemon.getPokemonOfSpawn(), reward: 150 }
            const embed = {
                author: '¿Quién es este pokémon?',
                description: 'Tienes `15 segundos` y `3 oportunidades` para responder correctamente el nombre del siguiente pokémon:',
                files: {
                    attachment: data.pokemon.getImg(),
                    name: 'pokemon.png',
                },
                footer: message.author.tag,
            }
            
            this.sendEmbed(message, embed)
                .then(msg => {
                    setTimeout(() => {
                        msg.delete()
                        if(!data.response) message.react('⌛')
                    }, 15000)

                    const collector = new MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 15000, max: 3 })
                    collector.on('collect', async m => {
                        if(data.response) return

                        const response = m.content.toLowerCase()
                        if(response == data.pokemon.pokemon.toLowerCase()) data.response = true
                        else {
                            let res
                            if(isNaN(response)) res = this.pokemon.get(response)
                            else res = this.pokemon.getByID(response)

                            if(res && res.id == data.pokemon.id) data.response = true
                        }

                        if(!data.response) return m.react('❌')

                        m.react('☑️')
                        await this.db.balance.increment({ money: +data.reward }, { where: { id: balance.id } })
                        
                        return this.sendEmbed(message, { color: '#16A167', author: [message.author.tag, message.author.avatarURL()], description: 'Has acertado el nombre del pokémon, ganaste ' + data.reward + ' pokécuartos.', timestamp: true })
                    })
                })
        }
    }
}

module.exports = Command
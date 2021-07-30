const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'heal'
        this.cooldown = 10
        this.description = 'Recupera la salud de tu pokémon.'
        this.uses = [
            ['Recuperar a tu pokémon', ''],
        ]

        this.exec = async (message, args, server) => {
            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, attributes: ['id', 'name', 'gender', 'life'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!pokemon) return message.reply('no tienes ningún pokémon seleccionado.')

            const embed = {
                color: 'RED',
                author: [message.author.tag, message.author.avatarURL()],
                description: pokemon.name + ' ya estaba recuperad' + (pokemon.gender == 'Hembra' ? 'a' : 'o') + ' al 100%.',
                footer: 'Podrás volver a curar a otro pokémon dentro de ' + this.cooldown + ' segundos.'
            }

            if(pokemon.life < 100) {
                pokemon.life += 15
                if(pokemon.life > 100) pokemon.life = 100

                embed.color = '#16A167'
                embed.description = pokemon.name + ' ahora se encuentra recuperad' + (pokemon.gender == 'Hembra' ? 'a' : 'o') + ' al ' + pokemon.life + '%.'

                await this.db.pokemon.update({ life: pokemon.life }, { where: { id: pokemon.id } })
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
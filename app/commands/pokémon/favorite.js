const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'favorite'
        this.alias = ['fav', 'favorites', 'favorito', 'favoritos']
        this.cooldown = 5
        this.description = 'Selecciona tu pokémon como favorito.'
        this.uses = [
            ['Añadir o retirar un pokémon de tus favoritos', ''],
        ]

        this.exec = async (message, args, server) => {
            const embed = {
                color: '#16A167',
                author: [message.author.tag, message.author.avatarURL()],
                footer: 'Para ver la lista de tus pokémon favoritos escribe el comando ' + await server.getPrefix() + 'pokemon fav'
            }
            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, attributes: ['id', 'name', 'gender', 'favorite'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!pokemon) return message.reply('no tienes ningún pokémon seleccionado.')

            pokemon.favorite = !pokemon.favorite
            if(!pokemon.favorite) embed.description = pokemon.name + ' ha sido retirad' + (pokemon.gender == 'Hembra' ? 'a' : 'o') + ' de tu lista de favoritos.'
            else embed.description = pokemon.name + ' ha sido añadid' + (pokemon.gender == 'Hembra' ? 'a' : 'o') + ' a tu lista de favoritos.'

            await this.db.pokemon.update({ favorite: pokemon.favorite }, { where: { id: pokemon.id } })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
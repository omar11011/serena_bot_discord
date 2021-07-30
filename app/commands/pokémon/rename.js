const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'rename'
        this.cooldown = 4
        this.description = 'Personaliza el nombre de tu pokémon seleccionado.'
        this.uses = [
            ['Cambiar el nombre de tu pokémon', '<nombre>'],
            ['Nombre por defecto de tu pokémon', ''],
        ]

        this.exec = async (message, args, server) => {
            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ], attributes: ['id', 'pokemon', 'name'] })
            if(!pokemon) return message.channel.send('❌ No tienes ningún pokémon seleccionado.')

            if(!args[0]) pokemon.name = pokemon.pokemon
            else {
                pokemon.name = args.join(" ")
                if(pokemon.name.length > 20) return message.channel.send('❌ El nombre de tu pokémon no puede tener más de 20 caracteres.')
            }

            await this.db.pokemon.update({ name: pokemon.name }, { where: { id: pokemon.id } })

            return this.sendEmbed(message, { color: '#16A167', author: [message.author.tag, message.author.avatarURL()], description: 'Se ha actualizado el nombre de tu ' + pokemon.pokemon + ' a ' + pokemon.name + '.' })
        }
    }
}

module.exports = Command
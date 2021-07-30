const Base = require('../../../util/class/Command')
const info = require('../../../util/functions/infoPokemon')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'global'
        this.cooldown = 4
        this.description = 'Obtén información de un pokémon según su ID Global.'
        this.uses = [
            ['Ver un pokémon según su ID global', '<idGlobal>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0] || isNaN(args[0]) || args[0] < 1) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <idGlobal>`')

            const data = await this.db.pokemon.findOne({ where: { id: parseInt(args[0]) }, include: [ { model: this.db.trainer, as: 'trainer', attributes: ['name'] } ] })
            if(!data) return message.channel.send('❌ No hay ningún pokémon con esta ID.')

            const pokemon = this.pokemon.get(data.pokemon)

            return info(message, data, pokemon)
        }
    }
}

module.exports = Command
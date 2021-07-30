const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'sendpokemon'
        this.cooldown = 4
        this.description = 'Envía algún pokémon a otro usuario de una forma más rápida, recuerda que debes añadir el ID Global de tu pokémon.'
        this.uses = [
            ['Enviar pokémon', '<@usuario> <idGlobal>'],
        ]

        this.exec = async (message, args, server) => {
            const duel = new this.duel.base(message, message.author.id)
            const dataDuel = await duel.get()
            if(dataDuel) return message.reply('debes terminar tu duelo pendiente.')
            else duel.delete()

            const mencion = message.mentions.members.first()
            if(!mencion || mencion.bot || mencion.id == message.author.id) return message.channel.send('❌ Debes mencionar a un usuario.')
            if(!args[1] || isNaN(args[1])) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <@user> <idGlobal>`')

            const other = await this.db.trainer.findOne({ where: { user: mencion.id }, attributes: ['id'] })
            if(!other) return message.reply('este usuario no está registrado como entrenador pokémon.')

            const pokemon = await this.db.pokemon.findOne({ where: { id: parseInt(args[1]) }, attributes: ['id', 'pokemon', 'shiny'], include: [ { model: this.db.trainer, as: 'trainer', attributes: ['user'] } ] })
            if(!pokemon) return message.channel.send('❌ El ID introducido no le corresponde a ningún pokémon.')
            if(pokemon.trainer.user != message.author.id) return message.reply('este pokémon no te pertenece.')

            await this.db.pokemon.update({ select: false, object: null, price: null, favorite: false, trainerId: other.id }, { where: { id: pokemon.id } })

            const embed = {
                color: '#16A167',
                author: [message.author.tag, message.author.avatarURL()],
                description: (pokemon.shiny ? '⭐ ' : '') + pokemon.pokemon + ' ha sido transferido al usuario ' + mencion.user.tag + '.'
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
const Base = require('../../../util/class/Command')
const Spawn = require('../../../util/class/Spawn')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'redeemspawn'
        this.cooldown = 5
        this.description = 'Invoca a algún pokémon de IVs altas para que los usuarios puedan capturarlo.'
        this.uses = [
            ['Spawnear pokémon en el canal actual', '<pokémon>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <pokemon>`')

            const data = this.pokemon.get(args.join(" "))
            if(!data) return message.reply('este pokémon no existe.')
            if(!data.spawn && !data.redeem) return message.reply('este pokémon no puede obtenerse mediante redeem.')

            const inv = await this.db.inventory.findOne({ where: { item: 'Redeem' }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!inv) return message.reply('no tienes ningún redeem en tu inventario.')

            const spawn = new Spawn(message, message.guild.id, await server.getPrefix())
            spawn.create(message.channel.id, data.pokemon)

            inv.amount -= 1
            if(inv.amount == 0) return await this.db.inventory.destroy({ where: { id: inv.id } })
            else return await this.db.inventory.increment({ amount: -1 }, { where: { id: inv.id } })
        }
    }
}

module.exports = Command
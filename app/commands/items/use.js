const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'use'
        this.description = 'Has uso de algún item, algunos poseen sus propios comandos.'
        this.uses = [
            ['Usar un item', '<item> [cantidad]']
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <item>`')

            const find = { name: [], amount: 1 }
            for(let i = 0; i < args.length; i++) {
                if(isNaN(args[i])) find.name.push(args[i])
                else find.amount = parseInt(args[i])
            }
            
            const item = this.item.get(find.name.join(" "))
            if(!item) return message.channel.send('❌ Este ítem no existe o lo escribiste mal.')
            
            const inventory = await this.db.inventory.findOne({ where: { item: item.nombre }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!inventory) return this.sendEmbed(message, { color: 'RED', author: [message.author.tag, message.author.avatarURL()], description: 'No tienes este item en tu inventario.', footer: 'Puedes comprar este item en la tienda.' })
            if(inventory.amount < find.amount) return message.reply('sólo tienes (x' + inventory.amount + ') ' + item.nombre + ' en tu inventario.')
            
            const object = {
                trainerId: inventory.trainerId,
                user: message.author.id,
                guild: message.guild.id,
                channel: message.channel.id,
                prefix: await server.getPrefix(),
            }

            if(item.amountUsed) find.amount = item.amountUsed
            object.amount = find.amount

            if(item.categoria == 'Máquina') object.select = true, object.attributes = ['moves']
            if(item.categoria == 'Menta') object.select = true
            if(item.categoria == 'Item Evolutivo') object.select = true, object.attributes = ['name', 'gender']
            if(item.categoria == 'Vitamina') {
                object.select = true

                if(item.tipo == 'Vitamina') object.attributes = ['hp_pe', 'attack_pe', 'defense_pe', 'spattack_pe', 'spdefense_pe', 'speed_pe']
                if(item.tipo == 'Caramelo Raro') object.attributes = ['level', 'name', 'gender']
                if(item.tipo == 'Caramelo Dinamax') object.attributes = ['dynamax']
                if(item.tipo == 'Poción Gigamax') object.attributes = ['gigamax']
            }

            if(item.nombre == 'Boost') object.server = server
            if(['Caja Fondo', 'Caja Pin'].includes(item.nombre)) {
                object.message = message
                object.sendEmbed = this.sendEmbed
                object.inventory = inventory
            }

            if(object.select) {
                if(!object.attributes) object.attributes = []
                object.attributes = object.attributes.concat(['id', 'pokemon'])

                const select = await this.db.pokemon.findOne({ where: { select: true, trainerId: inventory.trainerId }, attributes: object.attributes })
                if(!select) return message.reply('no tienes ningún pokémon seleccionado.')

                object.pokemon = select
                object.dataPokemon = this.pokemon.get(select.pokemon)
            }

            const exec = await item.exec(object)
            if(['Caja Fondo', 'Caja Pin'].includes(item.nombre)) return
            if(exec.error) return message.channel.send('❌ ' + exec.errorMessage)

            if(item.gastable) {
                console.log(inventory)
                if(inventory.amount - find.amount < 1) await this.db.inventory.destroy({ where: { id: inventory.id } })
                else await this.db.inventory.increment({ amount: -find.amount }, { where: { id: inventory.id } })
            } else {
                if(inventory.uses == 1) {
                    if(inventory.amount - find.amount < 1) await this.db.inventory.destroy({ where: { id: inventory.id } })
                    else await this.db.inventory.update({ amount: (inventory.amount - find.amount), uses: item.uses }, { where: { id: inventory.id } })
                } else {
                    await this.db.inventory.increment({ uses: -1 }, { where: { id: inventory.id } })
                }
            }

            return this.sendEmbed(message, { color: '#16A167', author: [message.author.tag, message.author.avatarURL()], ...exec.embed })
        }
    }
}

module.exports = Command
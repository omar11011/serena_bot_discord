const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'item'
        this.cooldown = 4
        this.description = 'Obtén información de un item.'
        this.uses = [
            ['Información de un item', '<item>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <item>`')

            const item = this.item.get(args.join(" "))
            if(!item) return message.channel.send('❌ Este ítem no existe o lo escribiste mal.')

            const discount = item.metodo == 'Pokecuartos' ? this.client.config.offert.shop_money : this.client.config.offert.shop_gem
            item.precio = Math.ceil(item.precio * (1 - (discount / 100)))

            const inventory = await this.db.inventory.findOne({ where: { item: item.nombre }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            const embed = {
                author: [item.nombre, message.author.avatarURL()],
                description: item.descripcion,
                fields: [
                    { name: 'Categoría', value: item.categoria, inline: true, },
                    { name: 'Precio', value: item.precio, inline: true },
                    { name: 'Método de pago', value: item.metodo, inline: true },
                    { name: 'En venta', value: item.accesible ? 'Sí': 'No', inline: true },
                    { name: 'Reventa', value: item.vendible ? 'Sí': 'No', inline: true },
                    { name: 'Transferible', value: item.transferible ? 'Sí' : 'No', inline: true },
                    { name: 'Equipable', value: item.equipable ? 'Sí': 'No', inline: true },
                    { name: 'Gastable', value: item.gastable ? 'Sí': 'No', inline: true },
                ],
                footer: inventory ? 'Unidades en el inventario: ' + inventory.amount : 'No tienes este ítem en tu inventario.',
            }
            
            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
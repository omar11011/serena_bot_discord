const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'inventory'
        this.alias = ['i']
        this.cooldown = 4
        this.description = 'Obtén información de tu inventario.'
        this.uses = [
            ['Lista de las secciones del inventario', ''],
            ['Objetos de una categoría de tu inventario', '<página>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = {  }
            const categories = this.item.getCategories()
            const prefix = await server.getPrefix()

            if(!args[0]) {
                embed.author = 'Inventario',
                embed.description = 'Accede a cualquier categoría disponible de tu inventario.',
                embed.fields = [],
                embed.thumbnail = this.client.user.displayAvatarURL(),
                embed.footer = [message.author.tag, message.author.avatarURL()]

                for(let i = 0; i < categories.length; i++) embed.fields.push({ name: categories[i], value: 'Comando: `' + prefix + this.nombre + ' ' + (i + 1) + '`', inline: true })

                return this.sendEmbed(message, embed)
            } else {
                if(isNaN(args[0]) || parseInt(args[0]) < 1 || parseInt(args[0]) > categories.length) return message.react('❌')

                const items = this.item.getItemOfCategory(categories[parseInt(args[0]) - 1])
                const names = []

                for(let i = 0; i < items.length; i++) names.push(items[i].nombre)

                const inv = await this.db.inventory.findAll({ where: { item: { [Op.in]: names } }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
                if(inv.length == 0) return message.reply('no tienes objetos en esta categoría.')
                
                embed.data = inv
                embed.elements = 15
                embed.author = 'Categoría: ' + categories[parseInt(args[0]) - 1]
                embed.nameList = 'Item  Cantidad'
                embed.footer = 'Para comprar algún artículo utiliza el comando ' + prefix + 'buy <item>'
                embed.function = e => {
                    return e.item + ' (x' + e.amount + ')'
                }

                return this.sendPagination(message, embed)
            }
        }
    }
}

module.exports = Command
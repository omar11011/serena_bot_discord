const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'shop'
        this.alias = ['tienda']
        this.description = 'Obtén información de la tienda.'
        this.uses = [
            ['Listar categorías de la tienda', ''],
            ['Ver items de una categoría', '<página>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = {  }
            const categories = this.item.getCategories()
            const prefix = await server.getPrefix()

            if(!args[0]) {
                embed.author = '🛒 Tienda',
                embed.description = 'Accede a cualquier categoría disponible de nuestra tienda.',
                embed.fields = [],
                embed.thumbnail = this.client.user.displayAvatarURL(),
                embed.footer = [message.author.tag, message.author.avatarURL()]

                for(let i = 0; i < categories.length; i++) embed.fields.push({ name: categories[i], value: 'Comando: `' + prefix + this.nombre + ' ' + (i + 1) + '`', inline: true })

                return this.sendEmbed(message, embed)
            } else {
                if(isNaN(args[0]) || parseInt(args[0]) < 1 || parseInt(args[0]) > categories.length) return message.react('❌')

                const items = this.item.getItemOfCategory(categories[parseInt(args[0]) - 1])
                
                embed.data = items
                embed.elements = 15
                embed.author = '🛒 Categoría: ' + categories[parseInt(args[0]) - 1]
                embed.nameList = 'Item  Precio'
                embed.footer = 'Para comprar algún artículo utiliza el comando ' + prefix + this.nombre + ' <item>'
                embed.function = e => {
                    const discount = e.metodo == 'Pokecuartos' ? this.client.config.offert.shop_money : this.client.config.offert.shop_gem
                    const precio = Math.ceil(e.precio * (1 - (discount / 100)))
                    
                    return e.emoji + ' ' + e.nombre + ' | ' + precio + ' ' + (e.metodo == 'Pokecuartos' ? 'Pokécuartos' : 'Gemas')
                }

                return this.sendPagination(message, embed)
            }
        }
    }
}

module.exports = Command
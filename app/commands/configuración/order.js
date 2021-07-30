const Base = require('../../../util/class/Command')

const megadb = require('megadb')
const folder = new megadb.crearDB('order', 'data')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'order'
        this.alias = ['orden']
        this.description = 'Ordena a tus pokémon.'
        this.uses = [
            ['Ordernar los pokémon de forma ascendente por ID', 'id'],
            ['Ordernar los pokémon de forma descendente por ID', 'id desc'],
            ['Ordernar los pokémon de forma ascendente por nivel', 'nivel'],
            ['Ordernar los pokémon de forma descendente por nivel', 'nivel desc'],
            ['Ordernar los pokémon de forma ascendente por IV', 'iv'],
            ['Ordernar los pokémon de forma descendente por IV', 'iv desc'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) {
                const embed = {
                    author: [message.author.tag, message.author.avatarURL()],
                    description: 'Puedes configurar tus búsquedas según lo siguiente:',
                    fields: [
                        { name: 'Orden', value: '```' + this.order.join("  ") + '```', inline: true },
                        { name: 'Dirección', value: '```' + this.direction.join("  ") + '```', inline: true },
                    ],
                    footer: 'Utiliza el comando ' + await server.getPrefix() + this.nombre + ' <orden> <dirección>',
                }

                return this.sendEmbed(message, embed)
            }

            const data = { order: this.order[0], direction: this.direction[0] }

            for(let i = 0; i < args.length; i++) {
                if(i < 2) {
                    if(this.order.includes(args[i].toLowerCase())) data.order = args[i].toLowerCase()
                    if(this.direction.includes(args[i].toUpperCase())) data.direction = args[i].toLowerCase()
                }
            }

            if(data.order == this.order[0] && data.direction == this.direction[0]) folder.eliminar(message.author.id)
            else folder.establecer(message.author.id, data)

            return this.sendEmbed(message, { author: ['Configuración exitosa', message.author.avatarURL()], fields: [ { name: 'Orden', value: '```' + data.order + '```', inline: true }, { name: 'Dirección', value: '```' + data.direction + '```', inline: true } ] })
        }

        this.order = ['id', 'level', 'iv']
        this.direction = ['ASC', 'DESC']
    }
}

module.exports = Command
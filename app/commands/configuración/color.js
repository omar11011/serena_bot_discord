const Base = require('../../../util/class/Command')
const RoleColor = require('../../../util/class/Color')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'color'
        this.alias = ['colors']
        this.description = 'Obtén información de un color o elige un rol de color para tu perfil.'
        this.botPermissions = ['MANAGE_ROLES']
        this.uses = [
            ['Lista de colores disponibles', ''],
            ['Información de un color', '--view <color>'],
            ['Seleccionar un rol de color', '--select <color>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = {  }
            const color = new RoleColor()
            const prefix = await server.getPrefix()

            if(!args[0]) {
                embed.author = ['Roles de colores', this.client.user.displayAvatarURL()]
                embed.footer = 'Para visualizar un color escribe ' + prefix + this.nombre + ' --view <color>'
                embed.fields = [  ]

                for(let i = 0; i < color.list.length; i++) embed.fields.push({ name: color.list[i].emoji + ' ' + color.list[i].name, value: 'Comando: `' + prefix + this.nombre + ' --select ' + color.list[i].name.toLowerCase() + '`' })
            }
            else {
                const option = args[0].toLowerCase()
                args.splice(0, 1)

                if(!args[0]) return message.channel.send('❌ Debes agregar el nombre de un color.')

                const data = color.list.filter(e => {
                    return e.name == this.capitalize(args.join(" "))
                })
                if(data.length == 0) return message.channel.send('❌ Este color no existe.')

                if(option == '--view') {
                    embed.color = data[0].hex
                    embed.title = data[0].emoji + ' ' + data[0].name
                    embed.description = 'HEX: ' + data[0].hex
                    embed.footer = 'Para seleccionar este rol utiliza el comando ' + prefix + this.name + ' --select ' + data[0].name.toLowerCase()
                }
                else if(option == '--select') {
                    let role = message.guild.roles.cache.find(r => r.name === data[0].name)

                    if(!role) {
                        await message.guild.roles.create({
                            data: {
                                name: data[0].name,
                                color: data[0].hex,
                                permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                            },
                        }).then(e => {
                            role = e
                        })
                    }
                    if(message.member._roles.includes(role.id)) return message.channel.send('❌ Ya posees este rol.')
                    
                    message.member.roles.add(role)

                    const others = color.list.filter(e => {
                        return e.name != data[0].name
                    })
                    for(let i = 0; i < others.length; i++) {
                        const deleteRole = message.guild.roles.cache.find(r => r.name === others[i].name)
                        if(deleteRole && message.member._roles.includes(deleteRole.id)) message.member.roles.remove(deleteRole)
                    }

                    embed.color = data[0].hex
                    embed.author = '¡Rol seleccionado!'
                    embed.description = 'Se te ha añadido el color ' + data[0].name + ' a tu perfil.'
                }
                else return
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
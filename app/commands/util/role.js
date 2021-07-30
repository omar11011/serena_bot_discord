const Base = require('../../../util/class/Command')
const Color = require('../../../util/class/Color')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'role'
        this.alias = ['rol']
        this.description = 'Obtén información detallada del rol especificado.'
        this.uses = [
            ['Información de un rol del servidor', '<nombre>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = { color: this.client.config.bot.color }

            if(!args[0]) {
                embed.author = 'Por favor, especifique un rol'
                embed.description = 'Ejemplo: `' + await server.getPrefix() + 'role ' + this.client.config.bot.name.toLowerCase() + '` para obtener más información sobre el rol de ' + this.client.config.bot.name + '.'
                embed.footer = [message.author.tag, message.author.avatarURL()]
            } else {
                const role = this.getInfoRole(message.guild, args.join(" "))

                if(!role) {
                    embed.color = 'RED'
                    embed.description = '❌ No se encontró información de este rol.'
                } else {
                    const color = new Color()
                    const hex = color.intToHex(role.color)
                    const rgb = color.hexToRgb(hex)

                    embed.color = role.color
                    embed.title = `Información del rol @${role.name}:`
                    embed.description = `<@&${role.id}>`
                    embed.fields = [
                        { name: 'ID', value: role.id, inline: true },
                        { name: 'Posición', value: role.rawPosition, inline: true },
                        { name: 'Elevado', value: !role.hoist ? "No" : "Sí", inline: true },
                        { name: 'Gestionable', value: !role.managed ? "No" : "Sí", inline: true },
                        { name: 'Mencionable', value: !role.mentionable ? "No" : "Sí", inline: true },
                    ]

                    if(role.color != 0 && rgb !== null) embed.fields.push({ name: 'Color', value: `Hex: #${color.intToHex(role.color)}\nRGB: (${rgb.r}, ${rgb.g}, ${rgb.b})\nInt: ${role.color}`, inline: true })

                    if(embed.color == 0) embed.color = 'GRAY'
                }
            }

            return this.sendEmbed(message, embed)
        }

        this.getInfoRole = (guild, name) => {
            let result = false

            guild.roles.cache.map(e => {
                if(e.name.toLowerCase() == name.toLowerCase()) result = e
            })

            return result
        }
    }
}

module.exports = Command
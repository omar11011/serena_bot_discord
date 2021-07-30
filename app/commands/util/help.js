const Base = require('../../../util/class/Command')

const { join } = require('path')
const { readdir } = require('fs')

const timeWait = require('../../../util/functions/timeWait')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'help'
        this.alias = ['ayuda']
        this.description = 'Muestra las categorías de los comandos de la bot así como también la información individual de cada uno.'
        this.uses = [
            ['Lista de categorías de los comandos', ''],
            ['Acceder a los comandos de una categoría', '<página>'],
            ['Ver información de un comando en específico', '<comando>'],
        ]

        this.exec = async (message, args, server) => {
            const url = '../'
            const prefix = await server.getPrefix()
            const embed = { 
                color: this.client.config.bot.color,
                author: 'Comandos de ' + this.client.config.bot.name,
                footer: [this.client.config.bot.name + ' versión ' + this.client.package.version, this.client.user.displayAvatarURL()],
            }

            if(!args[0]) {
                readdir(join(__dirname, url), (err, folder) => {
                    folder = folder.filter(e => {
                        return e != 'admin'
                    })

                    embed.description = 'Actualmente contamos con `' + folder.length + '` categorías y `' + this.client.commands.length + '` comandos para que puedas divertirte.\nPara acceder a los comandos de una categoría usa el comando `' + prefix + this.nombre + ' <page>`.\nPara ver un comando más a detalle usa `' + prefix + this.nombre + ' <command>`.'
                    embed.fields = []

                    for(let i = 0; i < folder.length; i++) embed.fields.push({ name: this.capitalize(folder[i]), value: 'Comando: `' + prefix + this.nombre + ' ' + (i + 1) + '`', inline: true })

                    return this.sendEmbed(message, embed)
                })
            } else {
                const option = args[0].toLowerCase()

                if(isNaN(option)) {
                    let command = this.client.commands.filter(e => {
                        return e.nombre == option || e.alias.includes(option)
                    })

                    if(command.length < 1) return message.channel.send('❌ ¡Ups! Parece que este comando no existe.')
                    else command = command[0]

                    embed.author = ['Comando ' + command.nombre, this.client.user.displayAvatarURL()]
                    embed.fields = [
                        { name: 'Alias', value: command.alias.length > 0 ? command.alias.join(", ") : 'Ninguno', inline: true },
                        { name: 'Cooldown', value: timeWait(command.cooldown), inline: true },
                        { name: 'Habilitado', value: command.enabled ? 'Sí' : 'No', inline: true },
                        { name: 'Permisos de ' + this.client.config.bot.name, value: command.botPermissions.length > 0 ? '```' + command.botPermissions.join("\n") + '```' : 'Ninguno', inline: true },
                        { name: 'Permisos del usuario', value: command.userPermissions.length > 0 ? '```' + command.userPermissions.join("\n") + '```' : 'Ninguno', inline: true },
                    ]
                    embed.footer = '<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.'

                    if(command.uses.length > 0) {
                        const text = []
                        for(let i = 0; i < command.uses.length; i++) {
                            text.push('• ' + command.uses[i][0] + ': `' + prefix + command.nombre + (command.uses[i][1] != '' ? ' ' + command.uses[i][1] : '') + '`')
                        }
                        embed.fields.push({ name: 'Usos', value: text.join("\n") })
                    }
                    if(command.description != null) embed.description = command.description
                    
                    return this.sendEmbed(message, embed)
                } else {
                    readdir(join(__dirname, url), (err, folder) => {
                        folder = folder.filter(e => {
                            return e != 'admin'
                        })
                        if(option > folder.length) return message.react('❌')

                        readdir(join(__dirname, url + folder[option - 1] + '/'), (err, archives) => {
                            for(let i = 0; i < archives.length; i++) archives[i] = archives[i].split(".js")[0]

                            embed.description = 'Para ver un comando más a detalle usa `' + prefix + this.nombre + ' <command>`.'
                            embed.fields = [
                                { name: 'Categoría', value: this.capitalize(folder[option - 1]) },
                                { name: 'Comandos', value: '```' + archives.join("  ") + '```' }
                            ]
                            
                            return this.sendEmbed(message, embed)
                        })
                    })
                }
            }
        }
    }
}

module.exports = Command
const Base = require('../../../util/class/Command')
const url = '../../../client/public/img/welcome/themes/'

const { join } = require('path')
const { readFileSync, readdir } = require('fs')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'welcome'
        this.alias = ['bienvenida']
        this.enabled = false
        this.description = 'Administra las bienvenidas de tu servidor.'
        this.userPermissions = ['ADMINISTRATOR']
        this.uses = [
            ['Editar la descripción de la bienvenida', '--description <contenido>'],
            ['Editar el footer de la bienvenida', '--footer <contenido>'],
            ['Temas disponibles', '--theme'],
            ['Visualizar un tema', '--viewtheme <tema>']
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.channel.send('❌ Revisa la sección de ayuda de este comando.')

            const option = args[0].toLowerCase()
            const data = await server.getDataWelcome()

            args.splice(0, 1)
            
            if(option == '--description') {
                if(args.length < 1) return message.channel.send('❌ Debes agregar una descripción.')

                data.description = args.join(" ")
                message.channel.send('> La descripción de la bienvenida se ha actualizado correctamente.')
            }
            else if(option == '--footer') {
                if(args.length < 1) return message.channel.send('❌ Debes agregar una entrada válida para el footer.')

                data.footer = args.join(" ")
                message.channel.send('> El mensaje del footer de la bienvenida se ha actualizado correctamente.')
            } 
            else if(option == '--theme') {
                const prefix = await server.getPrefix()

                readdir(join(__dirname, url), (err, folder) => {
                    for(let i = 0; i < folder.length; i++) folder[i] = folder[i].split('.png')[0]

                    if(!args[0]) return message.channel.send('> Puedes elegir entre los siguientes temas: ' + folder.join(", ") + '.\n> Para visualizar alguno escribe `' + prefix + this.nombre + ' --viewtheme <tema>`')
                    if(!folder.includes(args.join(" ").toLowerCase())) return message.channel.send('❌ No encontré ningún tema con este nombre.')

                    data.theme = args.join(" ").toLowerCase()
                    message.channel.send('> Se ha establecido correctamente el nuevo tema de la bienvenida.')

                    return server.folder.establecer('welcome', data)
                })
            }
            else if(option == '--viewtheme') {
                if(!args[0]) return message.channel.send('❌ Debes agregar el nombre del tema que deseas buscar.')

                const prefix = await server.getPrefix()
                const theme = args.join(" ").toLowerCase()

                readdir(join(__dirname, url), (err, folder) => {
                    if(!folder.includes(theme + '.png')) return message.channel.send('❌ No encontré ningún tema con este nombre.')

                    const embed = {
                        author: 'Tema de la bienvenida',
                        description: 'Para elegir este tema utiliza el comando `' + prefix + this.nombre + ' --theme ' + theme + '`.',
                        files: {
                            attachment: readFileSync(join(__dirname, url + theme + '.png')),
                            name: theme + '.png',
                        },
                    }

                    return this.sendEmbed(message, embed)
                })
            }
            else return

            return server.folder.establecer('welcome', data)
        }
    }
}

module.exports = Command
const Base = require('../../../util/class/Command')
const downloadImg = require('../../../util/functions/downloadImg')

const { join } = require('path')
const { readdir } = require('fs')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'avatar'
        this.description = 'Muestra tu avatar o el del usuario especificado.'
        this.uses = [
            ['Mostrar tu avatar', ''],
            ['Mostrar avatar de un usuario', '<user>'],
        ]

        this.exec = async (message, args, server) => {
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)
            if(!user) return message.channel.send('❌ La ID introducida no le pertenece a ningún usuario.')
            
            const embed = {
                author: ['Avatar de ' + user.user.username, message.author.avatarURL()],
                image: user.user.displayAvatarURL({ dynamic: true, size: 2048 }),
                timestamp: true,
            }

            this.sendEmbed(message, embed)

            return readdir(join(__dirname, '../../../client/public/img/avatar/'), (err, folder) => {
                if(!folder.includes(user.user.id + '.png') && user.user.avatarURL() != null) {
                    downloadImg(user.user.avatarURL({ format: 'png' }), 'avatar/' + user.user.id + '.png', () => {
                        this.log.success('Avatar de ' + user.user.tag + ' descargado.')
                    })
                }
            })
        }
    }
}

module.exports = Command
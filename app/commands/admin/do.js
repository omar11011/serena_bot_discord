const Base = require('../../../util/class/Command')
const exec = require('child_process').exec

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'do'
        this.ownerOnly = true
        this.uses = [
            ['Ejecutar comando en la terminal', '<comando>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.react('❓')

            const embed = {
                color: '#16A167',
                author: '☑️ ¡Éxito!',
                fields: [ { name: 'INPUT', value: '```' + args.join(" ") + '```' } ],
                footer: message.author.tag,
                timestamp: true,
            }

            exec(args.join(' '), async (err, stdout, stderr) => {
                if(err) {
                    embed.color = 'RED'
                    embed.author = '❌ ¡Error!'
                    embed.fields.push({ name: 'OUTPUT', value: '```' + err + '```' })
                }
                else embed.fields.push({ name: 'OUTPUT', value: '```' + stdout.slice(0, 1013) + '```' })

                return this.sendEmbed(message, embed)
            })
        }
    }
}

module.exports = Command
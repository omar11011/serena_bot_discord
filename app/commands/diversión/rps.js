const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'rps'
        this.description = 'Juega al divertido Piedra, Papel o Tijera.'
        this.uses = [
            ['Jugar', '[opción]'],
        ]

        this.exec = async (message, args, server) => {
            let option = false
            if(args.length > 0) option = args[0]

            const result = this.getOption(option)
            const embed = {
                color: '#16A167',
                author: 'Resultado',
                fields: [
                    { name: message.author.username, value: result[0], inline: true },
                    { name: 'Retador', value: result[1], inline: true },
                ],
                footer: 'Ganador: ' + message.author.username,
                timestamp: true,
            }

            if(result[0] == result[1]) embed.color = '#ECE224', embed.footer = 'Empate'
            else {
                if(!result[2]) embed.color = '#EB243B', embed.footer = 'Ganador: Retador'
            }

            return this.sendEmbed(message, embed)
        }

        this.options = [
            // User - Bot - Result
            ['Papel', 'Piedra', true],
            ['Papel', 'Tijera', false],
            ['Papel', 'Papel'],
            ['Piedra', 'Piedra'],
            ['Piedra', 'Tijera', true],
            ['Piedra', 'Papel', false],
            ['Tijera', 'Piedra', false],
            ['Tijera', 'Tijera'],
            ['Tijera', 'Papel', true],
        ]

        this.getOption = option => {
            let options = []

            if(option) {
                options = this.options.filter(e => {
                    return e[0].toLowerCase() == option
                })
            }
            if(options.length < 1) options = this.options

            return options[Math.floor(Math.random() * options.length)]
        }
    }
}

module.exports = Command
const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'remove'
        this.alias = ['rm', 'remover']
        this.description = 'Retira pokécuartos, gemas o pokémon que hayas ofrecido durante el intercambio.'
        this.uses = [
            ['Retirar pokécuartos', 'c <cantidad>'],
            ['Retirar gemas', 'g <cantidad>'],
            ['Quitar pokémon', 'p <id1>'],
        ]

        this.exec = async (message, args, server) => {
            const user = new this.trade(message.author.id)
            const dataUser = await user.inTrade()

            const embed = {
                color: '#16A167',
                author: '🖥️ Computador',
                description: 'No estás dentro de ningún intercambio en este momento.',
                footer: message.author.tag,
            }

            if(!dataUser) {
                embed.color = 'RED'
                user.end()
            }
            else {
                if(args.length < 2) return message.react('❌')

                const option = args[0].toLowerCase()
                if(option == 'c') {
                    if(isNaN(args[1]) || parseInt(args[1]) < 1 || parseInt(args[1]) > dataUser.money) return message.react('❓')

                    const money = dataUser.money - parseInt(args[1])

                    dataUser.money = money
                    embed.description = dataUser.name + ' ha retirado ' + parseInt(args[1]) + ' pokécuartos.'
                }
                else if(option == 'g') {
                    if(isNaN(args[1]) || parseInt(args[1]) < 1 || parseInt(args[1]) > dataUser.gems) return message.react('❓')

                    const gems = dataUser.gems - parseInt(args[1])

                    dataUser.gems = gems
                    embed.description = dataUser.name + ' ha retirado ' + parseInt(args[1]) + ' gemas.'
                }
                else if(option == 'p') {
                    if(isNaN(args[1]) || parseInt(args[1]) < 1) return message.react('❓')

                    const all = await this.db.pokemon.findAll({ where: { trainerId: dataUser.trainerId }, attributes: ['id'] })
                    if(all.length == 0) return message.reply('aún no has capturado ningún pokémon.')
                    if(parseInt(args[1]) > all.length) return message.react('❓')

                    const id = all[parseInt(args[1]) - 1].id
                    const position = dataUser.pokemon.id.indexOf(id)
                    if(position < 0) return message.react('❓')

                    dataUser.pokemon.id.splice(position, 1)
                    dataUser.pokemon.text.splice(position, 1)
                    dataUser.pokemon.evolve.pokemon.splice(position, 1)
                    dataUser.pokemon.evolve.name.splice(position, 1)

                    embed.description = dataUser.name + ' ha retirado un pokémon.'
                }
                else return

                const other = new this.trade(dataUser.other)
                const dataOther = await other.inTrade()

                embed.fields = [
                    { name: (dataUser.accept ? '☑️ | ' : '⌛ | ') + dataUser.name, value: '```Dinero: ' + dataUser.money + '\nGemas: ' + dataUser.gems + (dataUser.pokemon.text.length > 0 ? '\nPokémon:\n' + dataUser.pokemon.text.join("\n") : '') + '```' },
                    { name: (dataOther.accept ? '☑️ | ' : '⌛ | ') + dataOther.name, value: '```Dinero: ' + dataOther.money + '\nGemas: ' + dataOther.gems + (dataOther.pokemon.text.length > 0 ? '\nPokémon:\n' + dataOther.pokemon.text.join("\n") : '') + '```' },
                ]
                embed.footer = 'Para aceptar el intercambio ambos deben usar el comando ' + await server.getPrefix() + 'confirm'

                user.folder.establecer('data', dataUser)
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'add'
        this.alias = ['añadir']
        this.cooldown = 4
        this.description = 'Añade pokécuartos, gemas o pokémon a tu intercambio.'
        this.uses = [
            ['Agregar pokécuartos', 'c <cantidad>'],
            ['Agregar gemas', 'g <cantidad>'],
            ['Añadir pokémon', 'p <id1> [id2] ... [id5]'],
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
                    if(isNaN(args[1]) || parseInt(args[1]) < 1) return message.react('❓')

                    const balance = await this.db.balance.findOne({ where: { trainerId: dataUser.trainerId }, attributes: ['money'] })
                    const money = dataUser.money + parseInt(args[1])
                    if(balance.money < money) return message.reply('no tienes suficiente dinero en tus ahorros.')

                    dataUser.money = money
                    embed.description = dataUser.name + ' ha añadido ' + parseInt(args[1]) + ' pokécuartos.'
                }
                else if(option == 'g') {
                    if(isNaN(args[1]) || parseInt(args[1]) < 1) return message.react('❓')

                    const balance = await this.db.balance.findOne({ where: { trainerId: dataUser.trainerId }, attributes: ['gems'] })
                    const gems = dataUser.gems + parseInt(args[1])
                    if(balance.gems < gems) return message.reply('no tienes suficientes gemas.')

                    dataUser.gems = gems
                    embed.description = dataUser.name + ' ha añadido ' + parseInt(args[1]) + ' gemas.'
                }
                else if(option == 'p') {
                    let ids = []

                    args.map(e => {
                        if(!isNaN(e)) {
                            const number = parseInt(e)
                            if(number > 0 && !ids.includes(number)) ids.push(number)
                        }
                    })
                    if(ids.length == 0) return message.react('❓')

                    const all = await this.db.pokemon.findAll({ where: { trainerId: dataUser.trainerId }, attributes: ['id'] })
                    if(all.length == 0) return message.reply('aún no has capturado ningún pokémon.')

                    for(let i = 0; i < ids.length; i++) {
                        let value = null
                        if(ids[i] <= all.length && !dataUser.pokemon.id.includes(all[ids[i] - 1].id)) value = all[ids[i] - 1].id
                        ids[i] = value
                    }
                    ids = ids.filter(e => {
                        return e != null
                    })
                    if(ids.length == 0) return message.react('❓')
                    if(ids.length > 5) ids = ids.slice(0, 5)

                    const find = await this.db.pokemon.findAll({ where: { id: { [Op.in]: ids } }, attributes: ['id', 'pokemon', 'name', 'shiny', 'level', 'object'] })

                    find.map(e => {
                        dataUser.pokemon.id.push(e.id)
                        dataUser.pokemon.text.push('    ' + (e.shiny ? '⭐ ' : '') + e.pokemon + ' (Nivel ' + e.level + ')')

                        const evolves = this.pokemon.get(e.pokemon).evolucion
                        evolves.map(f => {
                            if(f.tipo == 'Intercambio') {
                                let canEvolve = false

                                if(!f.item) canEvolve = true
                                else {
                                    if(f.item.nombre == e.object) canEvolve = true
                                }

                                if(canEvolve) {
                                    if(e.pokemon == e.name) e.name = f.evolucion
                                    e.pokemon = f.evolucion
                                }
                            }
                        })

                        dataUser.pokemon.evolve.pokemon.push(e.pokemon)
                        dataUser.pokemon.evolve.name.push(e.name)
                    })

                    embed.description = dataUser.name + ' ha añadido ' + ids.length + ' pokémon.'
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
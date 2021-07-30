const Base = require('../../../util/class/Command')
const info = require('../../../util/functions/infoPokemon')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'info'
        this.cooldown = 4
        this.description = 'Obtén la información de tu pokémon seleccionado.'
        this.uses = [
            ['Información de tu pokémon seleccionado', ''],
            ['Información de tu último pokémon capturado', 'latest'],
            ['Información de un pokémon según su ID', '<id>'],
        ]

        this.exec = async (message, args, server) => {
            let data
            if(args[0]) {
                if(args[0].toLowerCase() == 'latest') {
                    data = await this.db.pokemon.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ], order: [['id', 'desc']] })
                }
                else if(!isNaN(args[0]) && parseInt(args[0]) > 0) {
                    const all = await this.db.pokemon.findAll({ attributes: ['id'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
                    if(all.length == 0) return message.reply('aún no has capturado ningún pokémon.')
                    if(parseInt(args[0]) > all.length) return message.react('❌')
    
                    data = await this.db.pokemon.findOne({ where: { id: all[parseInt(args[0]) - 1].id }, include: [ { model: this.db.trainer, as: 'trainer', attributes: ['name'] } ] })
                }
                else return message.react('❌')
            } else {
                const duel = new this.duel.base(message, message.author.id)
                const dataDuel = await duel.get()

                if(!dataDuel) {
                    duel.delete()
                    data = await this.db.pokemon.findOne({ where: { select: true }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: ['name'] } ] })
                } else {
                    const pokemon = this.pokemon.get(dataDuel.pokemon.pokemon)
                    const embed = {
                        color: pokemon.color.hexadecimal,
                        author: [pokemon.pokemon + ' #' + pokemon.id, message.author.avatarURL()],
                        fields: [
                            { name: 'Salud', value: dataDuel.power.hp + '/' + dataDuel.power.hpTotal, inline: true },
                            { name: 'Ataque', value: dataDuel.power.attack, inline: true },
                            { name: 'Defensa', value: dataDuel.power.defense, inline: true },
                            { name: 'Ataque Esp.', value: dataDuel.power.spattack, inline: true },
                            { name: 'Defensa Esp.', value: dataDuel.power.spdefense, inline: true },
                            { name: 'Velocidad', value: dataDuel.power.speed, inline: true },
                        ],
                        files: {
                            attachment: pokemon.getImg(dataDuel.pokemon.shiny),
                            name: 'pokemon.png',
                        },
                        footer: 'Actualmente estás dentro de un duelo pokémon.'
                    }

                    return this.sendEmbed(message, embed)
                }
            }

            if(!data) return message.reply('no tienes ningún pokémon seleccionado.')
            const pokemon = this.pokemon.get(data.pokemon)

            if(data.gigamax == null) {
                pokemon.evolucion.map(async e => {
                    if(e.tipo == 'Gigamax') {
                        let is = false
                        if(Math.round(Math.random() * 100) < data.iv) is = true
                        await this.db.pokemon.update({ gigamax: is }, { where: { id: data.id } })
                        data.gigamax = is
                    }
                })
            }

            return info(message, data, pokemon)
        }
    }
}

module.exports = Command
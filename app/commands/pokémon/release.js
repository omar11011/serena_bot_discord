const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')
const { MessageCollector } = require('discord.js')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'release'
        this.alias = ['liberar']
        this.cooldown = 10
        this.description = 'Libera uno o más pokémon que ya no queiras tener en tu equipo.'
        this.uses = [
            ['Liberar pokémon según su ID', '<id1> [id2] ... [id15]'],
        ]

        this.exec = async (message, args, server) => {
            const trade = new this.trade(message.author.id)
            const inTrade = await trade.inTrade()
            if(inTrade) return message.reply('no puedes ejecutar este comando durante un intercambio.')
            else trade.end()

            const duel = new this.duel.base(message, message.author.id)
            const inDuel = await duel.get()
            if(inDuel) return message.reply('debes terminar tu duelo pendiente.')
            else duel.delete()

            const prefix = await server.getPrefix()
            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' <id> [id] [id] ...`')

            const data = { id: [], idGlobal: [], text: [], money: 0, vitamins: ['hp_pe', 'attack_pe', 'defense_pe', 'spattack_pe', 'spdefense_pe', 'speed_pe'], status: null }
            for(let i = 0; i < args.length; i++) {
                if(!isNaN(args[i])) {
                    const id = parseInt(args[i])
                    if(id > 0 && !data.id.includes(id)) data.id.push(id)
                }
            }
            if(data.id.length == 0) return message.react('❌')
            if(data.id.length > 15) return message.channel.send('❌ Sólo puedes liberar grupos de 15 pokémon.')

            const all = await this.db.pokemon.findAll({ attributes: ['id'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(all.length == 0) return message.reply('aún no has capturado ningún pokémon.')

            for(let i = 0; i < data.id.length; i++) {
                if(data.id[i] <= all.length) data.idGlobal.push(all[data.id[i] - 1].id)
            }
            if(data.idGlobal.length == 0) return message.react('❌')
            delete data.id

            const pokemon = await this.db.pokemon.findAll({ where: { id: { [Op.in]: data.idGlobal } }, attributes: ['pokemon', 'shiny', 'level', 'iv', 'hp_pe', 'attack_pe', 'defense_pe', 'spattack_pe', 'spdefense_pe', 'speed_pe', 'trainerId'] })
            const embed = {
                color: '#16A167',
                author: [message.author.tag, message.author.avatarURL()],
                description: '¿Estás seguro que deseas liberar los siguientes pokémon? Para aceptar sólo escribe `yes`.',
            }

            for(let i = 0; i < pokemon.length; i++) {
                data.text.push('Nivel ' + pokemon[i].level + ' - IV: ' + pokemon[i].iv + '% | ' + pokemon[i].pokemon + (pokemon[i].shiny ? '⭐' : ''))

                for(let j = 0; j < data.vitamins.length; j++) {
                    if(pokemon[i][data.vitamins[j]] > 0) data.money += (300 * pokemon[i][data.vitamins[j]])
                }

                if(pokemon[i].level > 40) data.money += (3000 * (pokemon[i].level - 40))

                if(this.pokemon.get(pokemon[i].pokemon).categoria.nombre == 'Normal') data.money += 250
                else data.money += 2500
            }
            embed.fields = [ { name: 'Pokémon', value: '```' + data.text.join("\n") + '```' } ]
            embed.footer = 'Recibirás un total de ' + data.money + ' pokécuartos.'

            this.sendEmbed(message, embed).then(msg => {
                setTimeout(() => {
                    if(data.status == null) msg.react('⌛')
                }, 11000)
            })

            const collector = new MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 10000, max: 1 })
            collector.on('collect', async msg => {
                if(msg.content.toLowerCase() == 'yes') {
                    data.status = true

                    delete data.text
                    delete embed.fields
                    delete embed.footer

                    await this.db.pokemon.destroy({ where: { id: { [Op.in]: data.idGlobal } } })
                    await this.db.balance.increment({ money: +data.money }, { where: { trainerId: pokemon[0].trainerId } })

                    embed.description = '¡Has recibido ' + data.money + ' pokécuartos!'
                    msg.react('☑️')

                    return this.sendEmbed(message, embed)
                }
                else {
                    data.status = false
                    return msg.react('❌')
                }
            })
        }
    }
}

module.exports = Command
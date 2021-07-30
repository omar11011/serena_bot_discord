const Base = require('../../../util/class/Command')
const addPokedex = require('../../../util/functions/addPokedex')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'redeem'
        this.cooldown = 5
        this.description = 'Captura instantáneamente un pokémon con IV alto, este puede ser elegido por ti pero no debe ser una megaevolución o un pokémon gigamax.'
        this.uses = [
            ['Capturar un pokémon', '<pokémon>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <pokemon>`')

            const data = this.pokemon.get(args.join(" "))
            if(!data) return message.reply('este pokémon no existe.')
            if(!data.spawn && !data.redeem) return message.reply('este pokémon no puede obtenerse mediante redeem.')

            const inv = await this.db.inventory.findOne({ where: { item: 'Redeem' }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!inv) return message.reply('no tienes ningún redeem en tu inventario.')

            const pokemon = {
                pokemon: data.pokemon,
                name: data.pokemon,
                ball: ['Master Ball', 'Ente Ball'][Math.floor(Math.random() * 2)],
                shiny: Math.ceil(Math.random() * 100000) > (100000 - 50) ? true : false,
                gender: data.randomGender(),
                nature: data.getNature(),
                level: 40 + Math.ceil(Math.random() * 10),
                friendship: data.amistad,
                date: new Date(),
                trainerId: inv.trainerId,
            }

            const stats = data.generateStats(false, true)
            pokemon.hp = stats[0]
            pokemon.attack = stats[1]
            pokemon.defense = stats[2]
            pokemon.spattack = stats[3]
            pokemon.spdefense = stats[4]
            pokemon.speed = stats[5]
            pokemon.iv = stats[6]

            const embed = {
                author: '☑️ ¡Pokémon capturado!',
                description: 'Has capturado un' + (pokemon.gender == 'Hembra' ? 'a ' : ' ') + (pokemon.shiny ? '⭐ ' : '') + data.pokemon + ' nivel ' + pokemon.level + '.',
                footer: 'Usuario: ' + message.author.tag,
            }

            await this.db.pokemon.create(pokemon)
                .then(async () => {
                    const pokedex = await addPokedex(inv.trainerId, data.id)
                    if(pokedex) embed.footer = 'Se ha añadido este pokémon a tu pokédex.'

                    inv.amount -= 1
                    if(inv.amount == 0) await this.db.inventory.destroy({ where: { id: inv.id } })
                    else await this.db.inventory.increment({ amount: -1 }, { where: { id: inv.id } })
        
                    return this.sendEmbed(message, embed)
                })
        }
    }
}

module.exports = Command
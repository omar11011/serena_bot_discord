const Base = require('../../Base')

const megadb = require('megadb')
const folder = new megadb.crearDB('duel', 'process/')

class ObjetoDeBatalla extends Base {
    constructor() {
        super()

        this.categoria = 'Objeto de Batalla'
        this.precio = 250
        this.result = ''
        this.attack = 0
        this.defense = 0
        this.spattack = 0
        this.spdefense = 0
        this.speed = 0
        this.evasion = 0
        this.precision = 0
        this.vendible = true

        this.execute = async message => {
            let status = false

            const duel = await folder.obtener(message.author.id)

            if(!duel) message.reply(`no estás dentro de ningún combate para hacer uso de este item.`)
            else {
                if(duel.only) message.reply(`sólo puedes usar estos objetos en batallas contra otros usuarios.`)
                else {
                    if(duel.duel.object.use) {
                        message.reply('ya usaste un objeto durante este turno.')
                    } else {
                        if(duel.duel.object.quantity == 5) message.reply(`ya usaste demasiados objetos de batalla durante el encuentro.`)
                        else {
                            status = true
        
                            folder.establecer(message.author.id, {
                                ...duel,
                                pokemon: {
                                    ...duel.pokemon,
                                    power: {
                                        ...duel.pokemon.power,
                                        attack: duel.pokemon.power.attack + this.attack,
                                        defense: duel.pokemon.power.defense + this.defense,
                                        spattack: duel.pokemon.power.spattack + this.spattack,
                                        spdefense: duel.pokemon.power.spdefense + this.spdefense,
                                        speed: duel.pokemon.power.speed + this.speed,
                                        precision: duel.pokemon.power.precision + this.precision,
                                        evasion: duel.pokemon.power.evasion + this.evasion,
                                    },
                                },
                                duel: {
                                    ...duel.duel,
                                    object: {
                                        quantity: duel.duel.object.quantity + 1,
                                        use: true,
                                    }
                                },
                            })
        
                            await message.reply(`${duel.pokemon.pokemon} ${this.result}`)
                        }
                    }
                }
            }

            return status
        }
    }
}

module.exports = ObjetoDeBatalla
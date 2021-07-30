const megadb = require('megadb')
const db = require('../../server/models')
const exec = require('child_process').exec

const nameStats = ['hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed']

class Duel {

    constructor(user) {
        this.user = user
        this.folder = new megadb.crearDB(this.user, 'duel/')

        this.pokemon = require('../Pokemon')

        this.inDuel = async () => {
            const data = await this.folder.obtener('data')
            return data
        }

        this.getPokemon = async () => {
            const data = await db.pokemon.findOne({ 
                where: { select: true }, 
                include: [ 
                    { model: db.trainer, as: 'trainer', where: { user: this.user }, attributes: [] }, 
                ],
                attributes: ['id', 'pokemon', 'shiny', 'gender', 'nature', 'xp', 'level', 'hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed', 'iv', 'hp_pe', 'attack_pe', 'defense_pe', 'spattack_pe', 'spdefense_pe', 'speed_pe', 'friendship', 'life', 'object', 'gigamax', 'dynamax', 'moves', 'trainerId'],
            })
            if(data) return data.dataValues
            return false
        }

        this.create = async object => {
            const result = { error: true, errorMessage: null, successMessage: null }
            const inDuel = await this.inDuel()

            if(inDuel) result.errorMessage = 'Actualmente este usuario se encuentra en un duelo.'
            else {
                let pokemon

                if(!object.bot) pokemon = await this.getPokemon()
                else {
                    if(['random', 'qualifying'].includes(object.typeDuel)) pokemon = this.getRandomPokemon(object.sumStats)
                }
                
                if(!pokemon) result.errorMessage = 'Este usuario no tiene seleccionado ningún pokémon.'
                else {
                    const dataPokemon = this.pokemon.get(pokemon.pokemon)

                    if(object.match || !pokemon.level) pokemon.level = object.level
                    if(!pokemon.moves) {
                        pokemon.moves = []
                        if(object.typeDuel != 'friendly') {
                            dataPokemon.movimientos.map(e => {
                                if(e[1] <= pokemon.level) pokemon.moves.push(e[0].nombre)
                            })
                            
                            if(pokemon.moves.length < 1) pokemon.moves.push(dataPokemon.movimientos[0][0].nombre)
                            if(pokemon.moves.length > 4) {
                                for(let i = 0; pokemon.moves.length > 4; i++) {
                                    const position = Math.floor(Math.random() * pokemon.moves.length)
                                    pokemon.moves.splice(position, 1)
                                }
                            }
                        }
                    }
                    else pokemon.moves = pokemon.moves.split(",")

                    if(pokemon.moves.length < 1) result.errorMessage = 'Tu pokémon no tiene movimientos.'
                    else {
                        pokemon.rival = object.rival
                        pokemon.typeDuel = object.typeDuel
                        pokemon.form = pokemon.pokemon

                        if(!pokemon.nature) pokemon.nature = dataPokemon.getNature()
                        if(!pokemon.gender) pokemon.gender = dataPokemon.randomGender()

                        if(!pokemon.hp) {
                            const op = object.typeDuel == 'random' ? false : true
                            const stats = dataPokemon.generateStats(false, op)
                            for(let i = 0; i < nameStats.length; i++) pokemon[nameStats[i]] = stats[i]
                            pokemon.iv = stats[6]
                        }

                        if(!pokemon.hp_pe) {
                            const pe = object.typeDuel == 'random' ? 0 : 100
                            for(let i = 0; i < nameStats.length; i++) pokemon[nameStats[i] + '_pe'] = pe
                        }
                        
                        for(let i = 0; i < nameStats.length; i++) {
                            if(!pokemon.power) pokemon.power = {  }
                            if(!pokemon.powerExtra) pokemon.powerExtra = {  }

                            pokemon.power[nameStats[i]] = dataPokemon.calculateStat(pokemon.level, pokemon[nameStats[i]], pokemon[nameStats[i] + '_pe'], pokemon.nature, nameStats[i])
                            pokemon.powerExtra[nameStats[i]] = 0
                        }

                        pokemon.power.hpTotal = pokemon.power.hp
                        pokemon.power.hp = Math.round(pokemon.power.hp * (pokemon.life / 100))
                        pokemon.precision = 0
                        pokemon.evasion = 0
                        pokemon.usedMoveZ = false
                        pokemon.usedObjects = 0
                        pokemon.usedBerries = 0
                        pokemon.latestTime = Date.now()
                        pokemon.startDuel = Date.now()
                        pokemon.channel = object.channel
                        pokemon.match = object.match ? true : false

                        this.folder.establecer('data', pokemon)

                        result.error = false
                        result.successMessage = 'Datos de ' + this.user + ' guardados.'
                        result.level = pokemon.level
                        result.sumStats = pokemon.hp + pokemon.attack + pokemon.defense + pokemon.spattack + pokemon.spdefense + pokemon.speed
                    }
                }
            }

            return result
        }

        this.end = () => {
            this.folder.eliminar('data')
            this.deleteJSON()
        }

        this.deleteJSON = () => {
            exec('rm app/mega_databases/duel/' + this.user + '.json', async (err, stdout, stderr) => {
                if(err) return console.log(err)
            })
        }

        this.getRandomPokemon = stats => {
            const find = { min: 0, max: 300, pokemon: [] }

            if(stats >= 300 && stats < 400) find.min = 300, find.max = 400
            else if(stats >= 400 && stats < 500) find.min = 400, find.max = 500
            else if(stats >= 500 && stats < 600) find.min = 500, find.max = 600
            else if(stats >= 600) find.min = 600, find.max = 800

            this.pokemon.data.map(e => {
                if(e.spawn) {
                    const sum = e.stats.hp + e.stats.attack + e.stats.defense + e.stats.spattack + e.stats.spdefense + e.stats.speed
                    if(sum >= find.min && sum < find.max) find.pokemon.push(e.pokemon)
                }
            })

            find.pokemon = find.pokemon[Math.floor(Math.random() * find.pokemon.length)]

            return { pokemon: find.pokemon, life: 100 }
        }
    }

}

module.exports = Duel
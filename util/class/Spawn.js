const Pokemon = require('../Pokemon')

const megadb = require('megadb')

class Spawn {

    constructor(message, guild, prefix) {
        this.message = message
        this.guild = guild
        this.prefix = prefix

        this.folder = new megadb.crearDB(this.guild, 'spawn')
        this.sendEmbed = require('../functions/sendEmbed')

        this.create = (channel, form = false) => {
            const data = {  }
            const pokemon = !form ? Pokemon.getPokemonOfSpawn() : Pokemon.get(form)
            const stats = pokemon.generateStats(!form ? ['Legendario', 'Mítico', 'Ultra Ente'].includes(pokemon.categoria.nombre) : false, !form ? false : true)

            data.db = {
                pokemon: pokemon.pokemon,
                name: pokemon.pokemon,
                shiny: !form ? (Math.ceil(Math.random() * 100000) > (100000 - 10) ? true : false) : (Math.ceil(Math.random() * 100000) > (100000 - 80) ? true : false),
                gender: pokemon.randomGender(),
                nature: pokemon.getNature(),
                level: !form ? 40 : 40 + Math.ceil(Math.random() * 10),
                hp: stats[0],
                attack: stats[1],
                defense: stats[2],
                spattack: stats[3],
                spdefense: stats[4],
                speed: stats[5],
                iv: stats[6].toFixed(2),
                friendship: pokemon.amistad,
            }
            data.hpTotal = pokemon.calculateStat(data.db.level, data.db.hp, 0, data.db.nature)
            data.hp = Math.ceil(Math.random() * data.hpTotal)
            data.status = pokemon.randomStatus()
            data.categoria = pokemon.categoria.nombre
            data.habitat = pokemon.habitat.nombre
            data.tipo = pokemon.getType()
            data.speed = pokemon.stats.speed
            data.ratio = pokemon.captura
            data.pokemonId = pokemon.id

            try {
                const embed = {
                    color: pokemon.color.hexadecimal,
                    description: 'Ha aparecido un' + (data.db.gender == 'Hembra' ? 'a' : '') + ' ' + data.db.pokemon + ' cerca de ti. Captura este pokémon antes que otro entrenador se te adelante.',
                    fields: [
                        { name: 'Nivel', value: data.db.level, inline: true },
                        { name: 'Salud', value: data.hp + '/' + data.hpTotal, inline: true },
                        { name: 'Estado', value: data.status.nombre, inline: true },
                    ],
                    files: {
                        attachment: pokemon.getImg(),
                        name: 'pokemon.png',
                    },
                    channel: channel,
                    footer: 'Lanza alguna ball usando el comando ' + this.prefix + 'use <ball>',
                }
                
                this.folder.establecer(channel, data)
    
                return this.sendEmbed(this.message, embed)
            } catch {
                console.log('No pude acceder al canal de spawn del servidor ' + this.guild)
            }
        }
    }

}

module.exports = Spawn
const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'pokedex'
        this.alias = ['dex']
        this.cooldown = 5
        this.description = 'Obtén información de la pokédex o la captura y datos de un pokémon en específico.'
        this.uses = [
            ['Ver tu pokédex', ''],
            ['Ver información de un pokémon en la pokédex', '<pokémon>'],
        ]

        this.exec = async (message, args, server) => {
            let embed = {  }
            let allCatch = []
            let pokedex = await this.db.pokedex.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] }, ] })
            
            if(pokedex) {
                allCatch = pokedex.pokemon.split(",")
                const firstLength = allCatch.length

                allCatch = allCatch.filter((item, index, array) => {
                    return array.indexOf(item) === index && !isNaN(item)
                })
                if(firstLength > allCatch.length) await this.db.pokedex.update({ pokemon: allCatch.join(",") }, { where: { id: pokedex.id } })
            }

            if(!args[0]) {
                const data = this.pokemon.pokedex()
                
                embed.data = data
                embed.elements = 15
                embed.author = 'Pokédex Nacional'
                embed.thumbnail = message.author.avatarURL()
                embed.footer = 'Hasta el momento has capturado ' + allCatch.length + ' de ' + data.length + ' pokémon existentes.\nTotal de páginas: ' + Math.ceil(data.length / embed.elements)
                embed.nameList = 'Estado    Pokémon    ID'
                embed.function = e => {
                    const lengthTotal = data.length.toString().length
                    const lengthID = e.id.toString().length
                    return (allCatch.includes(e.id.toString()) ? '✅' : '❌') + ' ' + e.pokemon + ' #' + (lengthTotal == lengthID ? e.id : ('0').repeat(lengthTotal - lengthID) + e.id )
                }

                return await this.sendPagination(message, embed)
            } else {
                let data
                let shiny = false

                if(args[0].toLowerCase() == 'shiny') shiny = true, args.splice(0, 1)
                if(args.length < 1) return message.react('❓')

                let req = args.join(" ").toLowerCase()
                if(isNaN(req)) data = this.pokemon.get(req)
                else data = this.pokemon.getByID(parseInt(req))

                if(!data) return message.channel.send('❌ Este pokémon no existe.')

                embed.color = data.color.hexadecimal
                embed.author = [(shiny ? '⭐ ' : '') + data.pokemon + ' #' + data.id, message.author.avatarURL()]
                embed.description = 'Región: ' + data.region.nombre + '\nHábitat: ' + data.habitat.nombre + '\nTipo: ' + data.getType().join(" / ") + '\nCrecimiento: ' + data.crecimiento.nombre + '\nPeso: ' + data.peso + ' kg | Altura: ' + data.altura + ' m\nGrupo Huevo: ' + data.getGrupoHuevo().join(" / ") + '\nCaptura: ' + data.captura + '/255\nAmistad Base: ' + data.amistad
                embed.fields = [
                    { name: 'Salud', value: data.stats.hp + '/255', inline: true },
                    { name: 'Ataque', value: data.stats.attack + '/255', inline: true },
                    { name: 'Defensa', value: data.stats.defense + '/255', inline: true },
                    { name: 'Ataque Esp.', value: data.stats.spattack + '/255', inline: true },
                    { name: 'Defensa Esp.', value: data.stats.spdefense + '/255', inline: true },
                    { name: 'Velocidad', value: data.stats.speed + '/255', inline: true },
                ]
                embed.files = {
                    attachment: data.getImg(shiny),
                    name: 'pokemon.png',
                }
                embed.footer = allCatch.includes(data.id.toString()) ? '☑️ Ya has capturado a este pokémon.' : '❌ Aún no has capturado a este pokémon.'

                try {
                    return this.sendEmbed(message, embed)
                } catch(err) {
                    this.log.error(err)
                    return message.reply('hubo un error al tratar de mostrar la información de este pokémon, contacta al soporte.')
                }
            }
        }
    }
}

module.exports = Command
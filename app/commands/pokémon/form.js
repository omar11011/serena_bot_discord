const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'form'
        this.alias = ['forms', 'forma', 'formas']
        this.description = 'Obtén información de todas las formas de un pokémon.'
        this.uses = [
            ['Ver todas las formas de un pokémon', '<pokémon>'],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            if(!args[0]) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' <pokémon>`')

            let pokemon
            if(!isNaN(args[0])) pokemon = this.pokemon.getByID(parseInt(args[0]))
            else pokemon = this.pokemon.get(args.join(" "))

            if(!pokemon) return message.channel.send('❌ Este pokémon no existe.')

            const forms = this.pokemon.data.filter(e => {
                return e.id == pokemon.id
            })
            const data = { original: [], forms: [], mega: [], gigamax: [], temporal: [], exclusive: [] }

            forms.map(e => {
                const name = e.pokemon.split(" ")
                if(e.pokedex) data.original.push(e.pokemon)
                else {
                    if(e.spawn) data.forms.push(e.pokemon)
                    else {
                        if(e.redeem) data.exclusive.push(e.pokemon)
                        else {
                            if(name.includes('Gigamax')) data.gigamax.push(e.pokemon)
                            else if(name.includes('Mega')) data.mega.push(e.pokemon)
                            else data.temporal.push(e.pokemon)
                        }
                    }
                }
            })
            
            const embed = {
                color: pokemon.color.hexadecimal,
                author: pokemon.pokemon + ' #' + pokemon.id,
                fields: [],
                footer: 'Información requerida por: ' + message.author.tag,
            }

            if(data.original.length > 0) embed.fields.push({ name: 'Forma Original', value: '```' + data.original.join("\n") + '```', inline: true })
            if(data.forms.length > 0) embed.fields.push({ name: 'Formas Alternas', value: '```' + data.forms.join("\n") + '```', inline: true })
            if(data.mega.length > 0) embed.fields.push({ name: 'Mega Evoluciones', value: '```' + data.mega.join("\n") + '```', inline: true })
            if(data.gigamax.length > 0) embed.fields.push({ name: 'Formas Gigamax', value: '```' + data.gigamax.join("\n") + '```', inline: true })
            if(data.exclusive.length > 0) embed.fields.push({ name: 'Formas Exclusivas', value: '```' + data.exclusive.join("\n") + '```', inline: true })
            if(data.temporal.length > 0) embed.fields.push({ name: 'Formas Temporales', value: '```' + data.temporal.join("\n") + '```', inline: true })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
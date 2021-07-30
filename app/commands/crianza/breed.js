const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')
const { MessageCollector } = require('discord.js')

const timeWait = require('../../../util/functions/timeWait')
const antiquity = require('../../../util/functions/antiquity')
const timeBreed = require('../../../util/functions/timeBreed')
const breedMoves = require('../../../util/functions/breedMoves')
const breedStats = require('../../../util/functions/breedStats')
const getPreEvolution = require('../../../util/functions/getPreEvolution')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'breed'
        this.alias = ['criar', 'crianza', 'cruce']
        this.cooldown = 15
        this.description = 'Júntate con otro entrenador para que los pokémon de ambos puedan criar.'
        this.uses = [
            ['Criar tu pokémon con el de otro entrenador', '<usuario>'],
        ]

        this.exec = async (message, args, server) => {
            const mencion = message.mentions.members.first()
            if(!mencion || mencion.bot) return message.reply('debes mencionar a un usuario para que ambos crien un pokémon.')

            const users = await this.db.trainer.findAll({ where: { user: { [Op.in]: [message.author.id, mencion.id] } }, attributes: ['id', 'user', 'name', 'breed', 'date'], include: [ { model: this.db.pokemon, as: 'pokemon', where: { select: true } } ] })
            if(users.length != 2) return message.reply('ha ocurrido un error, uno o ambos de ustedes dos no están registrados como entrenadores pokémon o no tienen seleccionado a ningún pokémon.')

            message.channel.send('<@' + mencion.id + '>, el usuario ' + message.author.username + ' quiere que su pokémon y el tuyo críen, para aceptar sólo escribe `yes`.')
            const collector = new MessageCollector(message.channel, m => m.author.id == mencion.id, { time: 10000, max: 1 })
            collector.on('collect', async msg => {
                if(msg.content.toLowerCase() == 'yes') {
                    const classification = { male: null, female: null, none: null, ditto: null, canBreed: false }
                    users.map(e => {
                        const pokemon = e.pokemon[0]
                        const parent = this.pokemon.get(pokemon.pokemon)
                        if(pokemon.gender == 'Ninguno') {
                            const group = parent.getGrupoHuevo()
                            if(group.includes('Ditto')) classification.ditto = e
                            else if(!group.includes('Desconocido')) classification.none = e
                        } else {
                            if(pokemon.gender == 'Macho') classification.male = e
                            else if(pokemon.gender == 'Hembra') classification.female = e
                        }
                    })

                    if(classification.none != null) {
                        if(classification.ditto != null) {
                            classification.male = classification.ditto
                            classification.female = classification.none
                        }
                    }
                    if(classification.ditto != null) {
                        if(classification.male == null && classification.female != null) classification.male = classification.female
                        classification.female = classification.ditto
                    }

                    delete classification.none
                    delete classification.ditto

                    if(classification.male == null || classification.female == null) return message.channel.send('❌ Se necesita un padre y una madre para criar.')
                    // if(classification.male.pokemon[0].level < 50 || classification.female.pokemon[0].level < 50) return message.channel.send('❌ Los padres deben tener como mínimo nivel 50.')

                    const breed = new this.breed(message.guild.id, (classification.female.user).toString())
                    const incubator = await breed.dataEgg()
                    const guild = await breed.dataServer()
                    const time = timeBreed(breed, guild)

                    if(!guild.verify) return message.channel.send('❌ Este servidor no está verificado. Si deseas que el equipo evalúe este servidor contáctanos en el servidor oficial.')
                    if(!time.open) return message.channel.send('❌ El Centro de Crianza no está abierto en este momento en el servidor.')
                    // if(antiquity('days', classification.female.date) < 30 || antiquity('days', classification.male.date) < 30) return message.channel.send('❌ Uno de ustedes dos no cumplen el requisito de tener al menos 30 días jugando a la bot.')
                    if(incubator.length == classification.female.breed) return message.channel.send('❌ ' + classification.female.name + ' no tiene más espacio en su incubadora.')

                    const egg = { level: 5, date: new Date() }
                    const male = this.pokemon.get(classification.male.pokemon[0].pokemon)
                    const female = this.pokemon.get(classification.female.pokemon[0].pokemon)

                    for(let i = 0; i < male.getGrupoHuevo().length; i++) {
                        if(female.getGrupoHuevo().includes(male.getGrupoHuevo()[i])) classification.canBreed = true
                    }

                    if(male.getGrupoHuevo().includes('Ditto') || female.getGrupoHuevo().includes('Ditto')) classification.canBreed = true
                    if(!classification.canBreed) return message.channel.send('❌ ' + male.pokemon + ' y ' + female.pokemon + ' no comparten ningún grupo huevo en común.')

                    const data = this.pokemon.get(getPreEvolution(female.pokemon))
                    const stats = breedStats(classification.male.pokemon[0], classification.female.pokemon[0])

                    egg.pokemon = egg.name = data.pokemon
                    egg.ball = [classification.male.pokemon[0].ball, classification.female.pokemon[0].ball][Math.floor(Math.random() * 2)]
                    egg.gender = data.randomGender()
                    egg.nature = data.getNature()
                    egg.friendship = data.amistad
                    egg.moves = breedMoves(classification.male.pokemon[0].moves, male.movimientos)

                    for(let i = 0; i < Object.keys(stats).length; i++) {
                        if(!['destiny', 'irisAmulet'].includes(Object.keys(stats)[i])) egg[Object.keys(stats)[i]] = stats[Object.keys(stats)[i]]
                    }

                    const embed = {
                        color: '#16A167',
                        author: '☑️ ¡Crianza exitosa!',
                        fields: [
                            { name: 'Madre', value: classification.female.pokemon[0].pokemon, inline: true },
                            { name: 'Padre', value: classification.male.pokemon[0].pokemon, inline: true },
                        ],
                        footer: (stats.irisAmulet ? 'Se' : 'No se') +  ' ha usado Amuleto Iris en este cruce.\n' + (stats.destiny ? 'Se' : 'No se') +  ' ha usado Lazo Destino en este cruce.',
                    }

                    await this.db.pokemon.create(egg).then(data => {
                        const newEgg = { id: data.dataValues.id, time: (21600 * 1000) }

                        if(egg.iv >= 70 && egg.iv < 80) newEgg.time = (43200 * 1000)
                        else if(egg.iv >= 80 && egg.iv < 90) newEgg.time = (86400 * 1000)
                        else if(egg.iv >= 90 && egg.iv < 95) newEgg.time = (172800 * 1000)
                        else if(egg.iv >= 95) newEgg.time = (432000 * 1000)

                        if(incubator.length > 0) newEgg.time += (43200 * 1000 * incubator.length)

                        embed.fields.push({ name: 'Eclosión', value: timeWait(newEgg.time / 1000), inline: true })
                        newEgg.time += Date.now()
                        newEgg.pokemon = egg.pokemon

                        incubator.push(newEgg)
                        breed.folderEgg.establecer((classification.female.user).toString(), incubator)

                        this.sendEmbed(message, embed)

                        embed.author = 'Crianza Pokémon'
                        embed.channel = this.client.config.logs.public
                        embed.fields[0] = { name: 'Madre', value: classification.female.pokemon[0].pokemon + '\nUsuario: ' + classification.female.name + '\nID: ' + classification.female.user, inline: true }
                        embed.fields[1] = { name: 'Padre', value: classification.male.pokemon[0].pokemon + '\nUsuario: ' + classification.male.name + '\nID: ' + classification.male.user, inline: true }
                        embed.fields = [
                            ...embed.fields,
                            { name: 'Servidor', value: 'Nombre: ' + message.guild.name + '\nID: ' + message.guild.id, inline: true },
                            { name: 'Canal', value: 'Nombre: #' + message.channel.name + '\nID: ' + message.channel.id, inline: true },
                        ]

                        return this.sendEmbed(message, embed)
                    })
                }
                else return msg.react('❌')
            })
        }
    }
}

module.exports = Command
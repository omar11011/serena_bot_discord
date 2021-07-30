const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')

const megadb = require('megadb')
const folder = new megadb.crearDB('order', 'data/')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'pokemon'
        this.alias = ['pokémon']
        this.cooldown = 5
        this.description = 'Realiza una búsqueda entre todos tus pokémon de acuerdo a lo que proporciones.'
        this.uses = [
            ['Todos tus pokémon', ''],
            ['Pokémon shinys', 'shiny'],
            ['Pokémon favoritos', 'fav'],
            ['Pokémon legendarios', 'legendary'],
            ['Pokémon míticos', 'mythical'],
            ['Ultraentes', 'ub'],
            ['Pokémon que poseen factor gigamax', 'gigamax'],
            ['Pokémon según su tipo', 'type <tipo>'],
            ['Pokémon en específico', '<pokémon>'],
        ]

        this.exec = async (message, args, server) => {
            const options = { where: { id: { [Op.gt]: 0 } }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ], attributes: ['id', 'pokemon', 'name', 'shiny', 'level', 'iv', 'gigamax', 'trainerId'] }

            let newList = false
            for(let i = 0; i < args.length; i++) args[i] = args[i].toLowerCase()

            if(args[0]) {
                newList = true

                if(args[0] && args[0] == 'shiny') {
                    args.splice(0, 1)
                    options.where.shiny = true
                }

                if(args[0] && args[0] == 'fav') {
                    args.splice(0, 1)
                    options.where.favorite = true
                }

                if(args[0] && ['legendary', 'legendario'].includes(args[0])) {
                    args.splice(0, 1)
                    options.where.pokemon = { [Op.in]: this.getPokemonOfCategory('Legendario') }
                }
                if(args[0] && ['mythical', 'mitico', 'mítico'].includes(args[0])) {
                    args.splice(0, 1)
                    options.where.pokemon = { [Op.in]: this.getPokemonOfCategory('Mítico') }
                }
                if(args[0] && ['ub'].includes(args[0])) {
                    args.splice(0, 1)
                    options.where.pokemon = { [Op.in]: this.getPokemonOfCategory('Ultra Ente') }
                }

                if(args[0] && ['gigamax', 'gigantamax'].includes(args[0])) {
                    args.splice(0, 1)
                    options.where.gigamax = true
                }

                if(args.length > 1 && ['type', 'tipo'].includes(args[0])) {
                    let type = false

                    if(['steel', 'acero'].includes(args[1])) type = 'Acero'
                    else if(['water', 'agua'].includes(args[1])) type = 'Agua'
                    else if(['bug', 'bicho'].includes(args[1])) type = 'Bicho'
                    else if(['dragon', 'dragón'].includes(args[1])) type = 'Dragón'
                    else if(['electric', 'electrico', 'eléctrico'].includes(args[1])) type = 'Eléctrico'
                    else if(['ghost', 'fantasma'].includes(args[1])) type = 'Fantasma'
                    else if(['fire', 'fuego'].includes(args[1])) type = 'Fuego'
                    else if(['fairy', 'hada'].includes(args[1])) type = 'Hada'
                    else if(['ice', 'hielo'].includes(args[1])) type = 'Hielo'
                    else if(['fighting', 'lucha'].includes(args[1])) type = 'Lucha'
                    else if(['normal'].includes(args[1])) type = 'Normal'
                    else if(['oscuro'].includes(args[1])) type = 'Oscuro'
                    else if(['grass', 'planta'].includes(args[1])) type = 'Planta'
                    else if(['psychic', 'psiquico', 'psíquico'].includes(args[1])) type = 'Psíquico'
                    else if(['rock', 'roca'].includes(args[1])) type = 'Roca'
                    else if(['dark', 'siniestro'].includes(args[1])) type = 'Siniestro'
                    else if(['ground', 'tierra'].includes(args[1])) type = 'Tierra'
                    else if(['poison', 'veneno'].includes(args[1])) type = 'Veneno'
                    else if(['flying', 'volador'].includes(args[1])) type = 'Volador'
                    
                    for(let i = 0; i < 2; i++) args.splice(0, 1)

                    if(type) options.where.pokemon = { [Op.in]: this.getPokemonOfType(type) }
                }

                if(args.length > 0) {
                    options.where[Op.or] = [
                        { pokemon: { [Op.substring]: args.join(" ") } }, 
                        { name: { [Op.substring]: args.join(" ") } },
                    ]
                }
            }

            let data = await this.db.pokemon.findAll(options)
            if(data.length < 1) return message.reply('no encontré resultados para tu búsqueda.')

            if(newList) {
                const positions = await this.db.pokemon.findAll({ where: { trainerId: data[0].trainerId }, attributes: ['id'] })

                for(let i = 0; i < data.length; i++) {
                    for(let j = 0; j < positions.length; j++) {
                        if(data[i].id == positions[j].id) data[i].position = (j + 1)
                    }
                }
            } else {
                for(let i = 0; i < data.length; i++) data[i].position = (i + 1)
            }

            const order = await folder.obtener(message.author.id)
            if(order) {
                data = data.sort((e1, e2) => {
                    if(order.direction == 'asc') return e1[order.order] - e2[order.order]
                    else return e2[order.order] - e1[order.order]
                })
            }

            const embed = {
                data: data,
                elements: 15,
                nameList: 'Pokémon  ID  IV',
                author: [message.author.tag, message.author.avatarURL()],
                footer: 'Para ver la información de algún pokémon utiliza el comando ' + await server.getPrefix() + 'info <id>\nResultados de tu búsqueda: ' + data.length,
                function: e => {
                    return (e.shiny ? '⭐ ' : '') + e.name + ' | ID: ' + e.position + ' | Nivel: ' + e.level +  ' | IV: ' + e.iv + '%'
                }
            }

            return this.sendPagination(message, embed)
        }

        this.getPokemonOfCategory = category => {
            const data = []
            this.pokemon.data.map(e => {
                if(e.categoria.nombre == category) data.push(e.pokemon)
            })
            return data
        }

        this.getPokemonOfType = type => {
            const data = []
            this.pokemon.data.map(e => {
                if(e.getType().includes(type)) data.push(e.pokemon)
            })
            return data
        }
    }
}

module.exports = Command
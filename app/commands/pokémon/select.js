const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'select'
        this.alias = ['seleccionar']
        this.cooldown = 5
        this.description = 'Selecciona uno de tus pokémon para poder realizar otros comandos.'
        this.uses = [
            ['Seleccionar un pokémon según su ID', '<id>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0] || isNaN(args[0]) || parseInt(args[0]) < 1) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <id>`')

            const embed = { color: 'RED', author: [message.author.tag, message.author.avatarURL()] }
            const pokemon = await this.db.pokemon.findAll({ attributes: ['id'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })

            if(pokemon.length < 1) {
                embed.description = 'Aún no has capturado ningún pokémon'
                return this.sendEmbed(message, embed)
            }
            if(parseInt(args[0]) > pokemon.length) return message.react('❌')

            const data = await this.db.pokemon.findOne({ where: { id: pokemon[parseInt(args[0] - 1)].id }, attributes: ['id', 'name', 'level', 'iv', 'trainerId'] })

            embed.color = '#16A167'
            embed.description = 'Has seleccionado a ' + data.name + '.'
            embed.fields = [
                { name: 'ID Global', value: data.id, inline: true },
                { name: 'Nivel', value: data.level, inline: true },
                { name: 'IV', value: data.iv + '%', inline: true },
            ]

            await this.db.pokemon.update({ select: false }, { where: { select: true, trainerId: data.trainerId } })
            await this.db.pokemon.update({ select: true }, { where: { id: data.id } })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
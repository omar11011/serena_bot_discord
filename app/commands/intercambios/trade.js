const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')
const { MessageCollector } = require('discord.js')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'trade'
        this.cooldown = 10
        this.description = 'Envía una solicitud de intercambio a algún usuario.'
        this.uses = [
            ['Enviar petición de intercambio', '<@usuario>'],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            const mencion = message.mentions.members.first()
            if(!mencion || mencion.bot || mencion.id == message.author.id) return message.channel.send('❌ Debes mencionar a un usuario.')

            const user = new this.trade(message.author.id)
            const dataUser = await user.inTrade()
            if(dataUser) return message.reply('actualmente te encuentras en un intercambio.')

            const userDuel = new this.duel.base(message, message.author.id)
            const userInDuel = await userDuel.get()
            if(userInDuel) return message.reply('debes terminar tu duelo pendiente.')
            else userDuel.delete()

            const other = new this.trade(mencion.id)
            const dataOther = await other.inTrade()
            if(dataOther) return message.reply('este usuario se encuentra en un intercambio.')

            const otherDuel = new this.duel.base(message, mencion.id)
            const otherInDuel = await otherDuel.get()
            if(otherInDuel) return message.reply('este usuario se encuentra dentro de un combate.')
            else otherDuel.delete()

            const object = { channel: message.channel.id, money: 0, gems: 0, pokemon: { id: [], text: [], evolve: { pokemon: [], name: [] } }, accept: false }
            const users = await this.db.trainer.findAll({ where: { user: { [Op.in]: [message.author.id, mencion.id] } }, attributes: ['id', 'user'] })
            if(users.length != 2) return message.channel.send('¡Ups! Parece que uno de ustedes dos no está registrado como entrenador pokémon.')

            let status = null
            message.channel.send('<@' + mencion.id + '>, el usuario ' + message.author.username + ' quiere intercambiar contigo, acéptale escribiendo `' + prefix + 'accept`')
                .then(msg => {
                    setTimeout(() => {
                        if(status == null) {
                            user.end()
                            other.end()

                            return msg.react('⌛')
                        }
                    }, 11000)
                })

            const collector = new MessageCollector(message.channel, m => m.author.id == mencion.id, { time: 10000, max: 1 })
            collector.on('collect', async msg => {
                if(msg.content.toLowerCase() == prefix.toLowerCase() + 'accept') {
                    status = true
                    users.map(e => {
                        if(e.user == message.author.id) user.folder.establecer('data', { trainerId: e.id, name: message.author.tag, other: mencion.id, ...object })
                        else other.folder.establecer('data', { trainerId: e.id, name: mencion.user.tag, other: message.author.id, ...object })
                    })

                    const embed = {
                        color: '#16A167',
                        author: '🖥️ Centro de Intercambios',
                        description: 'El intercambio entre los usuarios ' + message.author.tag + ' y ' + mencion.user.tag + ' ha comenzado.',
                        fields: [
                            { name: 'Pokécuartos', value: '📤 : ' + prefix + 'add c <cantidad>\n📥 : ' + prefix + 'rm c <cantidad>', inline: true },
                            { name: 'Gemas', value: '📤 : ' + prefix + 'add g <cantidad>\n📥 : ' + prefix + 'rm g <cantidad>', inline: true },
                            { name: 'Pokémon', value: '📤 : ' + prefix + 'add p <id1> [id2] ...\n📥 : ' + prefix + 'rm p <id1> [id2] ...', inline: true },
                        ],
                        footer: 'Para cancelar el intercambio pueden utilizar el comando ' + prefix + 'cancel\nConfirma el intercambio con el comando ' + prefix + 'confirm'
                    }

                    return this.sendEmbed(message, embed)
                } else {
                    status = false

                    user.end()
                    other.end()

                    return msg.react('❌')
                }
            })
        }
    }
}

module.exports = Command
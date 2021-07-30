const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'sendmoney'
        this.cooldown = 4
        this.description = 'Envía pokécuartos a otro usuario de una forma más rápida.'
        this.uses = [
            ['Enviar pokécuartos', '<@usuario> <cantidad>'],
        ]

        this.exec = async (message, args, server) => {
            const duel = new this.duel.base(message, message.author.id)
            const dataDuel = await duel.get()
            if(dataDuel) return message.reply('debes terminar tu duelo pendiente.')
            else duel.delete()
            
            const mencion = message.mentions.members.first()
            if(!mencion || mencion.bot || mencion.id == message.author.id) return message.channel.send('❌ Debes mencionar a un usuario.')
            if(!args[1] || isNaN(args[1]) || parseInt(args[1]) < 1) return message.channel.send('❌ Debes agregar una cantidad válida.')

            const amount = parseInt(args[1])
            const data = await this.db.balance.findAll({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: { [Op.in]: [message.author.id, mencion.id] } }, attributes: ['user'] } ] })

            if(data.length != 2) return message.channel.send('❌ ¡Ups! Parece que uno de ustedes dos no está registrado como entrenador pokémon.')

            const balances = { user: null, other: null }
            data.map(e => {
                if(e.trainer.user == message.author.id) balances.user = e
                else balances.other = e
            })
            if(balances.user.money < amount) return message.reply('no cuentas con esta cantidad de dinero.')

            await this.db.balance.increment({ money: -amount }, { where: { id: balances.user.id } })
            await this.db.balance.increment({ money: +amount }, { where: { id: balances.other.id } })

            const embed = {
                color: '#16A167',
                author: [message.author.tag, message.author.avatarURL()],
                description: 'Has enviado ' + amount + ' pokécuartos a ' + mencion.user.tag + '.',
                timestamp: true,
            }

            this.sendEmbed(message, embed)

            embed.author = '💵 Transferencia'
            embed.fields = [
                { name: 'Remitente', value: message.author.tag + '\n' + message.author.id, inline: true },
                { name: 'Destinatario', value: mencion.user.tag + '\n' + mencion.id, inline: true },
                { name: 'Monto', value: amount + ' Pokécuartos', inline: true },
                { name: 'Servidor', value: message.guild.name + '\n' + message.guild.id, inline: true },
                { name: 'Canal', value: message.channel.name + '\n' + message.channel.id, inline: true },
            ]
            embed.channel = this.client.config.logs.public

            delete embed.description

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
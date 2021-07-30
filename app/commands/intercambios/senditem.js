const Base = require('../../../util/class/Command')

const { Op } = require('sequelize')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'senditem'
        this.cooldown = 4
        this.description = 'Envía items a otro usuario de una forma más rápida.'
        this.uses = [
            ['Enviar item', '<@usuario> <item> <cantidad>'],
        ]

        this.exec = async (message, args, server) => {
            const mencion = message.mentions.members.first()
            if(!mencion || mencion.bot || mencion.id == message.author.id) return message.channel.send('❌ Debes mencionar a un usuario.')

            args.splice(0, 1)
            if(!args[0]) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <@user> <item> [cantidad]`')

            const send = { item: [], amount: 1, userInv: null, otherInv: null, otherId: null }
            args.map(e => {
                if(isNaN(e)) send.item.push(e)
                else send.amount = parseInt(e)
            })

            const item = this.item.get(send.item.join(" "))
            if(!item) return message.channel.send('❌ Este item no existe.')
            if(!item.transferible) return message.channe.send('❌ Este item no puede transferirse.')

            const users = await this.db.trainer.findAll({ where: { user: { [Op.in]: [message.author.id, mencion.id] } }, attributes: ['id', 'user'] })
            if(users.length != 2) return message.channel.send('❌ ¡Ups! Parece que uno de ustedes dos no está registrado como entrenador pokémon.')
            users.map(e => {
                if(e.user != message.author.id) send.otherId = e.id
            })

            const inv = await this.db.inventory.findAll({ where: { item: item.nombre }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: { [Op.in]: [message.author.id, mencion.id] } }, attributes: ['user'] } ] })
            inv.map(e => {
                if(e.trainer.user == message.author.id) send.userInv = e
                else send.otherInv = e
            })

            if(send.userInv == null) return message.reply('no tienes este item en tu inventario.')
            if(send.userInv.amount < send.amount) return message.reply('no tienes suficientes unidades de este item en tu inventario.')

            if(send.userInv.amount - send.amount == 0) await this.db.inventory.destroy({ where: { id: send.userInv.id } })
            else await this.db.inventory.update({ amount: send.userInv.amount - send.amount, uses: item.uses }, { where: { id: send.userInv.id } })

            if(send.otherInv == null) await this.db.inventory.create({ item: item.nombre, amount: send.amount, uses: send.userInv.uses, trainerId: send.otherId })
            else await this.db.inventory.update({ amount: send.otherInv.amount + send.amount, uses: send.userInv.uses }, { where: { id: send.otherInv.id } })

            return this.sendEmbed(message, { color: '#16A167', author: [message.author.tag, message.author.avatarURL()], description: 'Has enviado (x' + send.amount + ') ' + item.nombre + ' a ' + mencion.user.tag + '.', timestamp: true })
        }
    }
}

module.exports = Command
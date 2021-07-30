const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'give'
        this.ownerOnly = true
        this.uses = [
            ['Dar dinero', '<user> money <cantidad>'],
            ['Dar gemas', '<user> gems <cantidad>'],
            ['Dar items', '<user> <item> <cantidad>'],
        ]

        this.exec = async (message, args, server) => {
            if(args.length < 2) return message.react('❌')

            const mencion = message.mentions.members.first()
            const obj = { user: mencion ? mencion.id : args[0], item: [], amount: 1 }
            args.splice(0, 1)

            for(let i = 0; i < args.length; i++) {
                if(isNaN(args[i])) obj.item.push(args[i])
                else obj.amount = parseInt(args[i])
            }
            obj.item = obj.item.join(" ").toLowerCase()

            const embed = {
                color: '#16A167',
                author: '☑️ ¡Premio entregado!',
                footer: 'ID del usuario: ' + obj.user,
                timestamp: true,
            }

            if(['money', 'gems'].includes(obj.item)) {
                const balance = await this.db.balance.findOne({ include: [ { model: this.db.trainer, as: 'trainer', attributes: ['name'], where: { user: obj.user } } ] })
                if(!balance) return message.react('❓')

                if(obj.item == 'money') {
                    embed.description = balance.trainer.name + ' ha recibido ' + obj.amount + ' pokécuartos.'
                    await this.db.balance.increment({ money: +obj.amount }, { where: { trainerId: balance.trainerId } })
                }
                else {
                    embed.description = balance.trainer.name + ' ha recibido ' + obj.amount + ' gemas.'
                    await this.db.balance.increment({ gems: +obj.amount }, { where: { trainerId: balance.trainerId } })
                }
            } else {
                const item = this.item.get(obj.item)
                if(!item) return message.react('❓')

                const user = await this.db.trainer.findOne({ where: { user: obj.user }, attributes: ['id', 'name'] })
                if(!user) return message.react('❓')

                const inv = await this.db.inventory.findOne({ where: { item: item.nombre, trainerId: user.id } })
                if(!inv) await this.db.inventory.create({ item: item.nombre, amount: obj.amount, uses: item.uses, trainerId: user.id })
                else await this.db.inventory.increment({ amount: +obj.amount }, { where: { id: inv.id } })

                embed.description = user.name + ' ha recibido (x' + obj.amount + ') ' + item.nombre + '.'
            }
            
            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
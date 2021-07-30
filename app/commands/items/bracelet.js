const Base = require('../../../util/class/Command')
const downloadImg = require('../../../util/functions/downloadImg')

const { join } = require('path')
const { readdir } = require('fs')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'bracelet'
        this.alias = ['brazalete', 'pulsera', 'aro']
        this.cooldown = 5
        this.description = 'Equipa algún cristal z en tu aro z para poder utilizar movimientos z durante los combates.'
        this.uses = [
            ['Cristal Z equipado', ''],
            ['Equipar un cristal z', '<cristal z>'],
        ]

        this.exec = async (message, args, server) => {
            const user = await this.db.trainer.findOne({ where: { user: message.author.id }, attributes: ['id', 'bracelet'] })
            if(!user) return message.reply('no estás registrado como entrenador pokémon.')

            const embed = {
                author: [message.author.tag, message.author.avatarURL()],
            }

            if(!args[0]) embed.description = user.bracelet != null ? 'Tienes equipado ' + user.bracelet + ' en tu brazalete.' : 'No tienes ningún cristal en tu Aro Z..'
            else {
                const bracelet = this.item.get(args.join(" "))
                if(!bracelet || bracelet.categoria != 'Cristal Z') return message.react('❌')
                if(user.bracelet != null && bracelet.nombre == user.bracelet) return message.reply('ya tienes equipado este cristal en tu Aro Z.')

                const inv = await this.db.inventory.findOne({ where: { item: bracelet.nombre, trainerId: user.id } })
                if(!inv) return message.reply('no tienes este cristal en tu inventario.')

                if(inv.amount == 1) await this.db.inventory.destroy({ where: { id: inv.id } })
                else await this.db.inventory.increment({ amount: -1 }, { where: { id: inv.id } })

                if(user.bracelet != null) {
                    const current = await this.db.inventory.findOne({ where: { item: user.bracelet, trainerId: user.id } })
                    if(current) await this.db.inventory.increment({ amount: +1 }, { where: { id: current.id } })
                    else await this.db.inventory.create({ item: user.bracelet, amount: 1, uses: bracelet.uses, trainerId: user.id })
                }

                await this.db.trainer.update({ bracelet: bracelet.nombre }, { where: { id: user.id } })
                embed.description = 'Has equipado correctamente ' + bracelet.nombre + ' en tu Aro Z.'
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
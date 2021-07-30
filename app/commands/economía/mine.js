const { length } = require('../../../data/Item')
const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'mine'
        this.alias = ['minar']
        this.cooldown = 450
        this.description = 'Obtén recompensas encontrando objetos valiosos mientras minas. La calidad de tu pico está relacionado con la cantidad de recompensa recibida.'
        this.uses = [
            ['Minar con Pico', ''],
            ['Minar con Pico Experto', '2'],
            ['Minar con Pico Maestro', '3'],
        ]
        this.ignoreCaptcha = false

        this.peaks = ['Pico', 'Pico Experto', 'Pico Maestro']

        this.exec = async (message, args, server) => {
            const option = args[0] && !isNaN(args[0]) && parseInt(args[0]) > 0 && parseInt(args[0]) <= this.peaks.length ? this.peaks[parseInt(args[0] - 1)] : this.peaks[0]
            const inv = await this.db.inventory.findOne({ where: { item: option }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!inv) return message.reply('no tienes ' + option + ' en tu inventario.')

            let reward = []
            let peak = this.item.get(option)
            let items = this.item.getItemOfCategory('Objeto Valioso')
            
            items.map(e => {
                if(e.precio > peak.min && e.precio <= peak.max) reward.push(e)
            })
            reward = reward[Math.floor(Math.random() * reward.length)]
            
            const embed = {
                color: '#16A167',
                author: [message.author.tag, message.author.avatarURL()],
                description: '¡Felicidades! Has encontrado un objeto minando.',
                fields: [
                    { name: 'Objeto', value: reward.nombre, inline: true },
                    { name: 'Recompensa', value: reward.precio + ' Pokécuartos', inline: true },
                ],
                footer: 'La recompensa se ha añadido a tu balance.',
            }
            
            inv.uses -= 1
            if(inv.uses == 0) {
                inv.amount -= 1
                if(inv.amount == 0) await this.db.inventory.destroy({ where: { id: inv.id } })
                else await this.db.inventory.update({ amount: inv.amount, uses: peak.uses }, { where: { id: inv.id } })
            }
            else await this.db.inventory.increment({ uses: -1 }, { where: { id: inv.id } })
            
            await this.db.balance.increment({ money: +reward.precio }, { where: { trainerId: inv.trainerId } })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
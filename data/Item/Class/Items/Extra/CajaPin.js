const Base = require('../../Tipos/Extra')
const db = require('../../../../../server/models')

const { join } = require('path')
const { readFileSync, readdir } = require('fs')

class Extra extends Base {
    constructor() {
        super()

        this.nombre = 'Caja Pin'
        this.emoji = ''
        this.metodo = 'Gemas'
        this.precio = 100
        this.descripcion = 'Obtén un pin aleatorio para tu perfil.'

        this.exec = async object => {
            const url = '../../../../../client/public/img/pin/'
            const pines = await db.pin.findAll({ where: { trainerId: object.trainerId } })

            for(let i = 0; i < pines.length; i++) pines[i] = pines[i].pin + '.png'
            
            readdir(join(__dirname, url), async (err, folder) => {
                folder = folder.filter(e => {
                    return !pines.includes(e)
                })
                if(folder.length == 0) return object.message.reply('Ya has conseguido todos los pines.')
                else {
                    folder = folder[Math.floor(Math.random() * folder.length)]
                    const embed = {
                        author: [object.message.author.tag, object.message.author.avatarURL()],
                        description: '¡Felicidades! Has conseguido el siguiente pin para tu colección.',
                        files: {
                            attachment: readFileSync(join(__dirname, url + folder)),
                            name: 'pin.png',
                        },
                        footer: 'Nombre del pin: ' + folder,
                    }
                    
                    if(object.inventory.amount == 1) await db.inventory.destroy({ where: { id: object.inventory.id } })
                    else await db.inventory.increment({ amount: -1 }, { where: { id: object.inventory.id } })

                    await db.pin.create({ pin: folder.split(".png")[0], trainerId: object.trainerId })
                    
                    return object.sendEmbed(object.message, embed)
                }
            })
        }
    }
}

module.exports = new Extra()
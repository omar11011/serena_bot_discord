const Base = require('../../Tipos/Extra')
const db = require('../../../../../server/models')

const { join } = require('path')
const { readFileSync, readdir } = require('fs')

class Extra extends Base {
    constructor() {
        super()

        this.nombre = 'Caja Fondo'
        this.emoji = ''
        this.metodo = 'Gemas'
        this.precio = 150
        this.descripcion = 'Obtén un fondo aleatorio para tu perfil.'

        this.exec = async object => {
            const url = '../../../../../client/public/img/bg/'
            const fondos = await db.background.findAll({ where: { trainerId: object.trainerId } })

            for(let i = 0; i < fondos.length; i++) fondos[i] = fondos[i].background + '.png'

            fondos.push('default.png')
            
            readdir(join(__dirname, url), async (err, folder) => {
                folder = folder.filter(e => {
                    return !fondos.includes(e)
                })
                if(folder.length == 0) return object.message.reply('Ya has conseguido todos los fondos.')
                else {
                    folder = folder[Math.floor(Math.random() * folder.length)]
                    const embed = {
                        author: [object.message.author.tag, object.message.author.avatarURL()],
                        description: '¡Felicidades! Has conseguido el siguiente fondo para tu colección.',
                        files: {
                            attachment: readFileSync(join(__dirname, url + folder)),
                            name: 'background.png',
                        },
                        footer: 'Nombre del fondo: ' + folder,
                    }
                    
                    if(object.inventory.amount == 1) await db.inventory.destroy({ where: { id: object.inventory.id } })
                    else await db.inventory.increment({ amount: -1 }, { where: { id: object.inventory.id } })

                    await db.background.create({ background: folder.split(".png")[0], trainerId: object.trainerId })
                    
                    return object.sendEmbed(object.message, embed)
                }
            })
        }
    }
}

module.exports = new Extra()
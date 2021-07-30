const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'moveinfo'
        this.description = 'Obtén información sobre algún movimiento.'
        this.uses = [
            ['Información de un movimiento', '<movimiento>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.channel.send('❌ Debes ingresar el nombre de un movimiento.')

            const move = this.movement.get(args.join(" "))
            if(!move) return message.channel.send('❌ Este movimiento no existe.')

            const embed = {
                color: '#16A167',
                author: move.nombre,
                fields: [
                    { name: 'Categoría', value: move.categoria, inline: true },
                    { name: 'Tipo', value: move.tipo.nombre, inline: true },
                    { name: 'Concurso', value: move.concurso.nombre, inline: true },
                    { name: 'Potencia', value: move.potencia, inline: true },
                    { name: 'Precisión', value: move.precision, inline: true },
                    { name: 'Movimiento Z', value: '```Movimiento: ' + move.move_z.movimiento + '\nCristal Z: ' + move.move_z.nombre + '\nPotencia: ' + move.move_z.potencia(move.potencia) + '\nPrecisión: ' + move.move_z.precision + '```', inline: false },
                ],
                footer: 'Información requerida por: ' + message.author.tag,
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
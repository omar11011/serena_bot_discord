const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'gems'
        this.description = 'Obtén los links de donación para poder obtener gemas.'
        this.uses = [
            ['Link', ''],
        ]

        this.exec = async (message, args, server) => {
            const embed = {
                color: '#16A167',
                author: [this.client.user.username, this.client.user.displayAvatarURL()],
                description: 'Puedes apoyar a la bot mediante los siguientes links:',
                fields: [
                    { name: `<:paypal:769275075479470080> Paypal`, value: `[Click here](https://www.paypal.com/paypalme/serenabot)`, inline: true },
                ],
                footer: 'Por cada dólar recibirás 250 gemas, recuerda enviar tu ID de Discord en la nota para poder entregarte tus recompensas lo más rápido posible.',
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'infobreed'
        this.alias = ['breedinfo']
        this.description = 'Obtén información sobre el uso de la crianza.'
        this.uses = [
            ['Ver información de la crianza', ''],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            const embed = {
                author: '🥚 Crianza Pokémon',
                description: 'El Centro de Crianza Pokémon está abierto gratuitamente entre las 17 y 18 horas de Perú y Colombia los días sábados y domingos, además tanto el servidor como los usuarios y los pokémon deberán cumplir con ciertos requisitos.\nLos usuarios podrán abrir el criadero por 6 horas utilizando el comando `' + prefix + 'donate <cantidad>`, al llegar al monto de donaciones de 300 gemas.\nDebes tener el cuenta que toda cría será publicada en los registros públicos del servidor oficial para llevar un control y evitar el farmeo.\nAdemás, cada usuario podrá incubar la cantidad de huevos según el nivel de incubadora que posea.',
                fields: [
                    { name: 'Requisitos del servidor', value: '```Tener al menos 100 usuarios.\nObtener la verificación por parte del equipo.```' },
                    { name: 'Requisitos de los usuarios', value: '```Tener al menos 30 días jugando a la bot.\n```' },
                    { name: 'Requisitos de los pokémon', value: '```Tener como mínimo el nivel 45.\nTener como mínimo el nivel de amistad en 70.\nTener como mínimo 10 días de captura.\nNo debe ser un pokémon bebé o legendario.```' },
                ],
                footer: 'El farmeo de pokémon en el criadero está penalizado con la eliminación de todos tus datos de ' + this.client.config.bot.name + '.',
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
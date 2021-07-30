const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = '8ball'
        this.description = 'Obtén respuestas aleatorias a tus preguntas.'
        this.uses = [
            ['Obtener una respuesta de ' + this.client.config.bot.name, '<pregunta>']
        ]

        this.exec = async (message, args, server) => {
            if(args.length < 1) return message.channel.send('¿Y la pregunta?')
            
            const option = this.responses[Math.floor(Math.random() * this.responses.length)]
            const embed = {
                color: option.color,
                author: '🎱 8Ball',
                fields: [
                    { name: 'Pregunta', value: args.join(" ") },
                    { name: 'Respuesta', value: option.data[Math.floor(Math.random() * option.data.length)] },
                ],
                footer: message.author.username,
                timestamp: true,
            }

            return this.sendEmbed(message, embed)
        }

        this.responses = [
            {
                color: '#16A167',
                data: [
                    'En mi opinión, sí',
                    'Es cierto',
                    'Es decididamente así',
                    'Probablemente',
                    'Buen pronóstico',
                    'Todo apunta a que sí',
                    'Sin duda',
                    'Sí',
                    'Sí - definitivamente',
                    'Debes confiar en ello',
                ],
            },
            {
                color: '#ECE224',
                data: [
                    'Respuesta vaga, vuelve a intentarlo',
                    'Pregunta en otro momento',
                    'Será mejor que no te lo diga ahora',
                    'No puedo predecirlo ahora',
                    'Concéntrate y vuelve a preguntar',
                ],
            },
            {
                color: '#EB243B',
                data: [
                    'No cuentes con ello',
                    'Mi respuesta es no',
                    'Mis fuentes me dicen que no',
                    'Las perspectivas no son buenas',
                    'Muy dudoso',
                ],
            },
        ]
    }

}

module.exports = Command
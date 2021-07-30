const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'medal'
        this.alias = ['medals', 'medalla', 'medallas']
        this.cooldown = 4
        this.description = 'Obtén información de alguna medalla o las que has conseguido hasta el momento.'
        this.uses = [
            ['Medallas conseguidas', ''],
            ['Información de una medalla', '<medalla>'],
        ]

        this.exec = async (message, args, server) => {
            const embed = {  }
            if(args[0]) {
                const medal = this.medal.get(args.join(" "))
                if(!medal) return message.reply('esta medalla no existe.')

                const has = await this.db.medal.findOne({ where: { medal: medal.nombre }, attributes: ['id'], include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })

                embed.author = [medal.nombre, message.author.avatarURL()]
                embed.description = medal.descripcion
                embed.fields = [
                    { name: 'Categoría', value: medal.tipo, inline: true },
                    { name: 'Título', value: medal.titulo, inline: true },
                ]
                embed.files = { attachment: medal.image(), name: 'medal.png' }
                embed.footer = has ? '☑️ Ya has conseguido esta medalla.' : '❌ Aún no has conseguido esta medalla.'

                return this.sendEmbed(message, embed)
            } else {
                let medals = await this.db.medal.findAll({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
                if(medals.length == 0) return message.reply('aún no has conseguido ninguna medalla.')
                
                for(let i = 0; i < medals.length; i++) medals[i] = medals[i].medal
                let data = medals.filter((item, index, array) => {
                    return array.indexOf(item) === index
                })
                
                embed.author = [message.author.tag, message.author.avatarURL()]
                embed.description = 'Estas son todas las medallas que has conseguido hasta el momento.'
                embed.data = data
                embed.elements = 15
                embed.nameList = 'Medalla'
                embed.function = e => {
                    let count = 0
                    medals.map(f => {
                        if(f == e) count += 1
                    })
                    return '`x' + (count < 10 ? '0' : '') + count + '` ' + e
                }
                
                return this.sendPagination(message, embed)
            }
        }
    }
}

module.exports = Command
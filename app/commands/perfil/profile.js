const Base = require('../../../util/class/Command')
const Experience = require('../../../util/class/Experience')

const moment = require('moment')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'profile'
        this.alias = ['perfil']
        this.cooldown = 5
        this.description = 'Muestra tu perfil de entrenador pokémon, muy pronto se renovará.'
        this.uses = [
            ['Ver mi perfil', ''],
            ['Ver el perfil de un usuario', '<user>'],
        ]

        this.exec = async (message, args, server) => {
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)
            if(!user) return message.channel.send('❌ La ID introducida no le pertenece a ningún usuario.')

            const data = await this.db.trainer.findOne({
                where: { user: user.id },
                include: [
                    { model: this.db.pokedex, as: 'pokedex', attributes: ['pokemon'] },
                    { model: this.db.medal, as: 'medal', attributes: ['id'] },
                ],
            })
            const experience = new Experience()
            const xp = await experience.get(user.id)
            const embed = {
                author: user.user.tag,
                description: 'Pronto los perfiles antiguos podrán ser visualizados desde la web.',
                thumbnail: user.user.avatarURL(),
                fields: [
                    { name: 'Registro', value: data ? moment(data.date).format('LLL') : 'No se ha registrado', inline: true },
                    { name: 'Rango', value: this.ranks[(data ? (data.rank == null ? 0 : data.rank) : 0)], inline: true },
                    { name: 'Región', value: data ? data.region : 'Sin región', inline: true },
                    { name: 'Experiencia', value: 'Nivel ' + xp.level + ' ' + '(' + xp.points + '/' + (experience.pointsPerLevel * xp.level) + ')', inline: true },
                    { name: 'Pokédex', value: (data && data.pokedex ? data.pokedex[0].pokemon.split(",").length : 0) + '/' + this.pokemon.pokedex().length, inline: true },
                    { name: 'Medallas', value: data ? data.medal.length : 0, inline: true},
                ],
            }

            if(data) {
                if(data.ban) embed.footer = 'Este usuario se encuentra baneado temporalmente.'
                else embed.footer = 'User ID: ' + data.id
                
                if(data.name != user.user.tag) await this.db.trainer.update({ name: user.user.tag }, { where: { id: data.id } })
            }
            
            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
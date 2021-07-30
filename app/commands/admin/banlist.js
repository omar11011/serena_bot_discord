const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'banlist'
        this.alias = ['listban']
        this.cooldown = 5
        this.uses = [
            ['Mostrar lista de usuarios', ''],
        ]

        this.exec = async (message, args, server) => {
            const users = await this.db.trainer.findAll({ where: { ban: true }, attributes: ['user', 'name'] })
            if(users.length == 0) return message.reply('no hay usuarios baneados temporalmente.')

            const embed = {
                data: users,
                elements: 15,
                nameList: 'Usuario  ID',
                function: e => {
                    return e.name + ' (' + e.user + ')'
                },
                author: 'Lista de baneos',
                description: 'Los usuarios que aparecen a continuación inflingieron algunas normas de ' + this.client.config.bot.name + ' y no han apelado aún por su sanción.',
                footer: 'Información requerida por: ' + message.author.tag,
            }

            return this.sendPagination(message, embed)
        }
    }
}

module.exports = Command
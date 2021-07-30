const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'confirm'
        this.cooldown = 5
        this.description = 'Confirma tu intercambio para poder actualizar sus datos.'
        this.uses = [
            ['Confirmar intercambio', ''],
        ]

        this.exec = async (message, args, server) => {
            const user = new this.trade(message.author.id)
            const dataUser = await user.inTrade()

            const embed = {
                color: '#16A167',
                author: '🖥️ Computador',
                description: 'No estás dentro de ningún intercambio en este momento.',
                footer: message.author.tag,
            }

            if(!dataUser) {
                embed.color = 'RED'
                user.end()
            }
            else {
                const other = new this.trade(dataUser.other)
                const dataOther = await other.inTrade()

                if(dataUser.accept) embed.description = 'Aún debes esperar a que ' + dataOther.name + ' confirme el intercambio.'
                else {
                    if(dataOther.accept) {
                        embed.description = 'El intercambio se ha concretado, estaré transfiriendo sus datos en un momento.'

                        // User
                        await user.addMoney(dataUser.money, dataOther.money)
                        await user.addGems(dataUser.gems, dataOther.gems)
                        
                        if(dataOther.pokemon.id.length > 0) await user.addPokemon(dataOther.pokemon)

                        // Other
                        await other.addMoney(dataOther.money, dataUser.money)
                        await other.addGems(dataOther.gems, dataUser.gems)
                        
                        if(dataUser.pokemon.id.length > 0) await user.addPokemon(dataUser.pokemon)

                        user.end()
                        other.end()
                    } else {
                        embed.description = 'Has confirmado el intercambio, ahora deberás esperar a que ' + dataOther.name + ' también confirme.'
                        dataUser.accept = true
                        user.folder.establecer('data', dataUser)
                    }
                }
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command
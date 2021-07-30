const Base = require('../../Base')
const db = require('../../../../server/models')

class ItemEvolutivo extends Base {
    constructor() {
        super()

        this.categoria = 'Item Evolutivo'
        this.precio = 3000
        this.amountUsed = 1
        this.equipable = true

        this.exec = async object => {
            const result = { error: false }
            const forms = []
            const date = new Date()
            const hours = date.getHours()

            object.dataPokemon.evolucion.map(e => {
                if(e.tipo == 'Item' && e.item.nombre == this.nombre) {
                    if(e.hembra == null && e.dia == null) forms.push(e.evolucion)
                    else {
                        if(e.hembra == null && e.dia != null) {
                            if((e.dia && hours >= 6 && hours <= 18) || (!e.dia && (hours < 6 || hours > 18))) forms.push(e.evolucion)
                        }
                        else if(e.hembra != null && e.dia == null) {
                            if((e.hembra && object.pokemon.gender == 'Hembra') || (!e.hembra && object.pokemon.gender == 'Macho')) forms.push(e.evolucion)
                        }
                        else if(e.hembra != null && e.dia != null) {
                            if(e.hembra && object.pokemon.gender == 'Hembra') {
                                if((e.dia && hours >= 6 && hours <= 18) || (!e.dia && (hours < 6 || hours > 18))) forms.push(e.evolucion)
                            }
                            else if(!e.hembra && object.pokemon.gender == 'Macho') {
                                if((e.dia && hours >= 6 && hours <= 18) || (!e.dia && (hours < 6 || hours > 18))) forms.push(e.evolucion)
                            }
                        }
                    }
                }
            })

            if(forms.length == 0) result.error = true, result.errorMessage = object.pokemon.pokemon + ' no puede evolucionar con este item.'
            else {
                const evolve = forms[Math.floor(Math.random() * forms.length)]
                result.embed = {
                    description: object.pokemon.pokemon + ' ha evolucionado en ' + evolve + '.'
                }
                if(object.pokemon.name == object.pokemon.pokemon) object.pokemon.name = evolve
                object.pokemon.pokemon = evolve
                await db.pokemon.update({ name: object.pokemon.name, pokemon: object.pokemon.pokemon }, { where: { id: object.pokemon.id } })
            }

            return result
        }
    }
}

module.exports = ItemEvolutivo
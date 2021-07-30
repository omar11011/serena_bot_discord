const config = require('../../config.json')

class Base {
    constructor() {
        this.nombre = 'NA'
        this.emoji = ''
        this.accesible = true
        this.vendible = false
        this.metodo = 'Pokecuartos'
        this.transferible = true
        this.equipable = false
        this.gastable = true
        this.descripcion = 'Aún no se ha añadido una descripción para este ítem.'
        this.uses = 1

        this.exec = async object => {
            return { error: true, errorMessage: 'El uso de este item no es mediante este comando.' }
        }
    }
}

module.exports = Base
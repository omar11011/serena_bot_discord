const Cristal = require('../../Tipos/CristalZ')

class AshPikastal extends Cristal {
    constructor() {
        super() 

        this.nombre = 'Ash-Pikastal Z'
        this.movimiento = 'Gigarrayo Fulminante'
        this.emoji = '<:ashpikastal:767982580871462912>'
        this.descripcion = `El Pikachu de Ash podrá usar su movimiento ${this.movimiento}.`
    }
}

module.exports = new AshPikastal()
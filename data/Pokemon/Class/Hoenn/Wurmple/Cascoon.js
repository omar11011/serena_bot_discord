const Base = require('./Wurmple').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 268
        this.pokemon = 'Cascoon'
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.peso = 11.5
        this.altura = 0.7
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dustox', 10),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('picadura'), 1],
        ]
        this.stats = {
            hp: 50,
            attack: 35,
            defense: 55,
            spattack: 25,
            spdefense: 25,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
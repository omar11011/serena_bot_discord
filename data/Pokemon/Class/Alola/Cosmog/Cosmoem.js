const Base = require('./Cosmog').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 790
        this.pokemon = 'Cosmoem'
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 999.9
        this.altura = 0.1
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Solgaleo', 53),
            new Entidades.Evolucion.Nivel('Lunala', 53),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
        ]
        this.stats = {
            hp: 43,
            attack: 29,
            defense: 131,
            spattack: 29,
            spdefense: 131,
            speed: 37,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
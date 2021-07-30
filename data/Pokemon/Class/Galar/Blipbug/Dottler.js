const Base = require('./Blipbug').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 825
        this.pokemon = 'Dottler'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 19.5
        this.altura = 0.4
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Orbeetle', 30),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('estoicismo'), 1],
            [move.get('confusión'), 1],
        ]
        this.stats = {
            hp: 50,
            attack: 35,
            defense: 80,
            spattack: 50,
            spdefense: 90,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
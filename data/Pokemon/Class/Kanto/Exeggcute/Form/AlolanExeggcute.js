const Base = require('../Exeggcute').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Exeggcute de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Dragón,
        ]
        this.peso = 2.5
        this.altura = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Item('Exeggutor de Alola', item.get('piedra hoja')),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('presa'), 1],
            [move.get('alboroto'), 1],
            [move.get('furia'), 10],
            [move.get('recurrente'), 17],
            [move.get('confusión'), 27],
            [move.get('don natural'), 37],
            [move.get('rayo solar'), 43],
            [move.get('paranormal'), 47],
            [move.get('psíquico'), 50],
        ]
        this.stats = {
            hp: 60,
            attack: 40,
            defense: 80,
            spattack: 60,
            spdefense: 45,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
const Base = require('../Slowpoke').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Slowpoke de Galar'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 36
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Item('Slowbro de Galar', item.get('brazal galanuez')),
            new Entidades.Evolucion.Item('Slowking de Galar', item.get('corona galanuez')),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ácido'), 6],
            [move.get('confusión'), 12],
            [move.get('hidropulso'), 18],
            [move.get('golpe cabeza'), 21],
            [move.get('cabezazo zen'), 24],
            [move.get('surf'), 30],
            [move.get('psíquico'), 36],
        ]
        this.stats = {
            hp: 90,
            attack: 65,
            defense: 65,
            spattack: 40,
            spdefense: 40,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
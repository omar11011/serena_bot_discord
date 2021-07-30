const Base = require('../Buneary').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Buneary de Saife'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 2
        this.altura = 0.4
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Lopunny de Saife'),
        ]
        this.captura = 190
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('impresionar'), 1],
            [move.get('sombra vil'), 8],
            [move.get('viento aciago'), 23],
            [move.get('garra umbría'), 36],
            [move.get('golpe fantasma'), 40],
            [move.get('golpe umbrío'), 52],
        ]
        this.stats = {
            hp: 55,
            attack: 66,
            defense: 44,
            spattack: 44,
            spdefense: 56,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
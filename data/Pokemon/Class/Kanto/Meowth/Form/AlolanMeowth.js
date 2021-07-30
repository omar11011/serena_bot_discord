const Base = require('../Meowth').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Meowth de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 4.2
        this.altura = 0.4
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Persian de Alola'),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('mordisco'), 6],
            [move.get('sorpresa'), 9],
            [move.get('golpes furia'), 14],
            [move.get('finta'), 22],
            [move.get('día de pago'), 30],
            [move.get('cuchillada'), 33],
            [move.get('buena baza'), 41],
            [move.get('tajo umbrío'), 49],
            [move.get('amago'), 50],
            [move.get('pulso umbrío'), 55],
        ]
        this.stats = {
            hp: 40,
            attack: 35,
            defense: 35,
            spattack: 50,
            spdefense: 40,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
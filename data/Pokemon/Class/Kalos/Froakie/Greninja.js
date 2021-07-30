const Base = require('./Frogadier').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 658
        this.pokemon = 'Greninja'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 40
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Greninja Ash', null, 70),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('burbuja'), 5],
            [move.get('ataque rápido'), 8],
            [move.get('lengüetazo'), 10],
            [move.get('hidropulso'), 14],
            [move.get('sombra vil'), 23],
            [move.get('corte'), 28],
            [move.get('finta'), 33],
            [move.get('shuriken de agua'), 36],
            [move.get('paranormal'), 49],
            [move.get('pulso umbrío'), 55],
            [move.get('hidrobomba'), 68],
            [move.get('tajo umbrío'), 77],
        ]
        this.stats = {
            hp: 72,
            attack: 95,
            defense: 67,
            spattack: 103,
            spdefense: 71,
            speed: 122,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
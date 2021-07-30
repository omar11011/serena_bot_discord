const Base = require('./Skorupi').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 452
        this.pokemon = 'Drapion'
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 61.5
        this.altura = 1.3
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('picotazo venenoso'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('desarme'), 5],
            [move.get('pin misil'), 9],
            [move.get('persecución'), 16],
            [move.get('picadura'), 20],
            [move.get('colmillo veneno'), 23],
            [move.get('carga tóxica'), 27],
            [move.get('tajo umbrío'), 38],
            [move.get('triturar'), 49],
            [move.get('aguijón letal'), 53],
            [move.get('veneno x'), 57],
        ]
        this.stats = {
            hp: 70,
            attack: 90,
            defense: 110,
            spattack: 60,
            spdefense: 75,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
const Base = require('./Toxel').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 849
        this.spawn = false
        this.pokemon = 'Toxtricity'
        this.peso = 40
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Toxtricity Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('moflete estático'), 1],
            [move.get('azote'), 1],
            [move.get('ácido'), 1],
            [move.get('impactrueno'), 1],
            [move.get('bomba ácida'), 1],
            [move.get('onda voltio'), 8],
            [move.get('carga tóxica'), 20],
            [move.get('chispa'), 30],
            [move.get('chispazo'), 36],
            [move.get('puya nociva'), 40],
            [move.get('amplificador'), 44],
            [move.get('estruendo'), 48],
            [move.get('eructo'), 50],
        ]
        this.stats = {
            hp: 75,
            attack: 98,
            defense: 70,
            spattack: 114,
            spdefense: 70,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
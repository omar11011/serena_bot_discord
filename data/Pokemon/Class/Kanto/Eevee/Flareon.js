const Base = require('./Eevee').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 136
        this.pokemon = 'Flareon'
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.peso = 25
        this.altura = 0.9
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Flareon', item.get('flareonsita')),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 5],
            [move.get('ataque rápido'), 13],
            [move.get('mordisco'), 17],
            [move.get('colmillo ígneo'), 20],
            [move.get('giro fuego'), 25],
            [move.get('polución'), 33],
            [move.get('humareda'), 37],
            [move.get('última baza'), 41],
            [move.get('envite ígneo'), 45],
            [move.get('furia'), 48],
            [move.get('lanzallamas'), 52],
        ]
        this.stats = {
            hp: 65,
            attack: 130,
            defense: 60,
            spattack: 95,
            spdefense: 110,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
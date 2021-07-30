const Base = require('./Shelgon').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 373
        this.pokemon = 'Salamence'
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Volador,
        ]
        this.peso = 102.6
        this.altura = 1.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Salamence', item.get('salamencita')),
        ]
        this.movimientos = [
            [move.get('furia'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('ascuas'), 4],
            [move.get('mordisco'), 10],
            [move.get('dragoaliento'), 13],
            [move.get('golpe cabeza'), 17],
            [move.get('triturar'), 25],
            [move.get('garra dragón'), 29],
            [move.get('cabezazo zen'), 35],
            [move.get('lanzallamas'), 49],
            [move.get('vuelo'), 50],
            [move.get('doble filo'), 63],
            [move.get('cola dragón'), 80],
        ]
        this.stats = {
            hp: 95,
            attack: 135,
            defense: 80,
            spattack: 110,
            spdefense: 80,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
const Base = require('./Braixen').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 655
        this.pokemon = 'Delphox'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 39
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Delphox', item.get('delphoxita')),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 5],
            [move.get('nitrocarga'), 14],
            [move.get('psicorrayo'), 18],
            [move.get('giro fuego'), 22],
            [move.get('psicocarga'), 36],
            [move.get('llama embrujada'), 36],
            [move.get('lanzallamas'), 45],
            [move.get('psíquico'), 57],
            [move.get('llamarada'), 74],
            [move.get('premonición'), 80],
        ]
        this.stats = {
            hp: 75,
            attack: 69,
            defense: 72,
            spattack: 114,
            spdefense: 100,
            speed: 104,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
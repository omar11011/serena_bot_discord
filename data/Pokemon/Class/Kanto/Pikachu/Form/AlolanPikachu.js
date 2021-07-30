const Base = require('../Pikachu').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Pikachu de Alola'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Psíquico,
        ]
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Item('Raichu de Alola', item.get('piedra trueno')),
        ]
        this.movimientos = [
            [move.get('impactrueno'), 1],
            [move.get('psíquico'), 1],
            [move.get('ataque rápido'), 4],
            [move.get('bola voltio'), 10],
            [move.get('amago'), 17],
            [move.get('poder oculto'), 21],
            [move.get('psicocarga'), 22],
            [move.get('moflete estático'), 24],
            [move.get('chispazo'), 30],
            [move.get('atizar'), 34],
            [move.get('rayo'), 40],
            [move.get('voltio cruel'), 48],
            [move.get('trueno'), 55],
            [move.get('premonición'), 60],
        ]
        this.stats = {
            hp: 35,
            attack: 50,
            defense: 40,
            spattack: 55,
            spdefense: 50,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
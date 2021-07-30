const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 179
        this.pokemon = 'Mareep'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 7.8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Flaaffy', 15),
        ]
        this.captura = 235
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impactrueno'), 8],
            [move.get('derribo'), 18],
            [move.get('bola voltio'), 22],
            [move.get('joya de luz'), 29],
            [move.get('chispazo'), 32],
            [move.get('doble rayo'), 39],
            [move.get('trueno'), 46],
        ]
        this.stats = {
            hp: 55,
            attack: 40,
            defense: 40,
            spattack: 65,
            spdefense: 45,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
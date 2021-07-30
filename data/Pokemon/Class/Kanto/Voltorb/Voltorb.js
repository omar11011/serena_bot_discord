const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 100
        this.pokemon = 'Voltorb'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 10.4
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Electrode', 30),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('bomba sónica'), 4],
            [move.get('chispa'), 9],
            [move.get('desenrollar'), 11],
            [move.get('rayo carga'), 16],
            [move.get('rapidez'), 20],
            [move.get('bola voltio'), 22],
            [move.get('impactrueno'), 26],
            [move.get('derribo'), 30],
            [move.get('chispazo'), 37],
            [move.get('rayo'), 40],
            [move.get('giro bola'), 46],
            [move.get('trueno'), 50],
        ]
        this.stats = {
            hp: 40,
            attack: 30,
            defense: 50,
            spattack: 55,
            spdefense: 55,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
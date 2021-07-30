const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 231
        this.pokemon = 'Phanpy'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 33.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Donphan', 25),
        ]
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('azote'), 6],
            [move.get('desenrollar'), 10],
            [move.get('don natural'), 15],
            [move.get('atizar'), 24],
            [move.get('derribo'), 28],
            [move.get('última baza'), 37],
            [move.get('doble filo'), 42],
        ]
        this.stats = {
            hp: 90,
            attack: 60,
            defense: 60,
            spattack: 40,
            spdefense: 40,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
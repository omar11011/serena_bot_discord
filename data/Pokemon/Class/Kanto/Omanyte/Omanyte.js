const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 138
        this.pokemon = 'Omanyte'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 7.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Omastar', 40),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 7],
            [move.get('pistola agua'), 10],
            [move.get('desenrollar'), 16],
            [move.get('disparo lodo'), 25],
            [move.get('salmuera'), 28],
            [move.get('cornada'), 34],
            [move.get('poder pasado'), 37],
            [move.get('pedrada'), 46],
            [move.get('clavo cañón'), 46],
            [move.get('hidrobomba'), 55],
        ]
        this.stats = {
            hp: 35,
            attack: 40,
            defense: 100,
            spattack: 90,
            spdefense: 55,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
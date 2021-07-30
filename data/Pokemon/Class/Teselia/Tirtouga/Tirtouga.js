const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 564
        this.pokemon = 'Tirtouga'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 16.5
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Carracosta', 37),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('desenrollar'), 5],
            [move.get('mordisco'), 8],
            [move.get('acua jet'), 15],
            [move.get('poder pasado'), 18],
            [move.get('triturar'), 21],
            [move.get('salmuera'), 28],
            [move.get('antiaéreo'), 31],
            [move.get('acua cola'), 41],
            [move.get('avalancha'), 45],
            [move.get('hidrobomba'), 51],
        ]
        this.stats = {
            hp: 54,
            attack: 78,
            defense: 103,
            spattack: 55,
            spdefense: 45,
            speed: 22,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
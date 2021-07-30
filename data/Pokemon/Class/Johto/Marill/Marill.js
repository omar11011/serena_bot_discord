const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 183
        this.pokemon = 'Marill'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 8.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Azumarill', 18)
,       ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('burbuja'), 7],
            [move.get('desenrollar'), 10],
            [move.get('rayo burbuja'), 13],
            [move.get('acua cola'), 20],
            [move.get('carantoña'), 23],
            [move.get('doble filo'), 37],
            [move.get('fuerza bruta'), 40],
            [move.get('hidrobomba'), 47],
        ]
        this.stats = {
            hp: 70,
            attack: 20,
            defense: 50,
            spattack: 20,
            spdefense: 50,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
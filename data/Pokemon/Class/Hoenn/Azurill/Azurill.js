const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 298
        this.pokemon = 'Azurill'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 2
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Marill'),
        ]
        this.captura = 150
        this.amistad = 50
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('burbuja'), 7],
            [move.get('rayo burbuja'), 13],
            [move.get('atizar'), 20],
            [move.get('bote'), 23],
        ]
        this.stats = {
            hp: 50,
            attack: 20,
            defense: 40,
            spattack: 20,
            spdefense: 40,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 204
        this.pokemon = 'Pineco'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 7.2
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Forretress', 31),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picadura'), 9],
            [move.get('derribo'), 12],
            [move.get('giro rápido'), 17],
            [move.get('don natural'), 23],
            [move.get('vendetta'), 31],
            [move.get('giro bola'), 42],
            [move.get('doble filo'), 45],
        ]
        this.stats = {
            hp: 50,
            attack: 65,
            defense: 90,
            spattack: 35,
            spdefense: 35,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
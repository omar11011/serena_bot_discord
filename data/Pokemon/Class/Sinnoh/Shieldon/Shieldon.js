const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 410
        this.pokemon = 'Shieldon'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 57
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Bastiodon', 30),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('derribo'), 15],
            [move.get('poder pasado'), 28],
            [move.get('cabeza de hierro'), 42],
            [move.get('cuerpo pesado'), 46],
        ]
        this.stats = {
            hp: 30,
            attack: 42,
            defense: 118,
            spattack: 42,
            spdefense: 88,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
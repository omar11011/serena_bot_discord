const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 175
        this.pokemon = 'Togepi'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 1.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Togetic'),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('poder pasado'), 33],
            [move.get('doble filo'), 45],
            [move.get('última baza'), 49],
        ]
        this.stats = {
            hp: 35,
            attack: 20,
            defense: 65,
            spattack: 40,
            spdefense: 65,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
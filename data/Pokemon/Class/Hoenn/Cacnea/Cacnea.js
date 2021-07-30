const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 331
        this.pokemon = 'Cacnea'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 51.3
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Cacturne', 32)
        ]
        this.captura = 190
        this.amistad = 35
        this.movimientos = [
            [move.get('picotazo venenoso'), 1],
            [move.get('absorber'), 4],
            [move.get('brazo pincho'), 16],
            [move.get('finta'), 19],
            [move.get('vendetta'), 26],
            [move.get('golpe bajo'), 34],
            [move.get('pin misil'), 38],
            [move.get('energibola'), 42],
        ]
        this.stats = {
            hp: 50,
            attack: 85,
            defense: 40,
            spattack: 85,
            spdefense: 40,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 225
        this.pokemon = 'Delibird'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 16
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('presente'), 1],
            [move.get('pico taladro'), 25],
        ]
        this.stats = {
            hp: 45,
            attack: 55,
            defense: 45,
            spattack: 65,
            spdefense: 45,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
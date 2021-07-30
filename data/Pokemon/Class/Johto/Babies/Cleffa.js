const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 173
        this.pokemon = 'Cleffa'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 3
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Clefairy'),
        ]
        this.captura = 150
        this.amistad = 140
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('hoja mágica'), 16],
        ]
        this.stats = {
            hp: 50,
            attack: 25,
            defense: 28,
            spattack: 45,
            spdefense: 55,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
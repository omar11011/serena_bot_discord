const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 177
        this.pokemon = 'Natu'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Xatu', 25),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('tinieblas'), 6],
            [move.get('poder reserva'), 17],
            [move.get('viento aciago'), 20],
            [move.get('psíquico'), 33],
            [move.get('premonición'), 44],
        ]
        this.stats = {
            hp: 40,
            attack: 50,
            defense: 45,
            spattack: 70,
            spdefense: 45,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
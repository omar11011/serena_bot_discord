const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 251
        this.pokemon = 'Celebi'
        this.region = Entidades.Region.Johto
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 45
        this.amistad = 100
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('hoja mágica'), 19],
            [move.get('poder pasado'), 28],
            [move.get('don natural'), 46],
            [move.get('premonición'), 64],
            [move.get('lluevehojas'), 82],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 100,
            spattack: 100,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
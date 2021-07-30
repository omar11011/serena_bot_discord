const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 789
        this.pokemon = 'Cosmog'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 0.1
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Cosmoem', 43),
        ]
        this.captura = 45
        this.amistad = 0
        this.movimientos = [
            [move.get('destructor'), 1],
        ]
        this.stats = {
            hp: 43,
            attack: 29,
            defense: 31,
            spattack: 29,
            spdefense: 31,
            speed: 37,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
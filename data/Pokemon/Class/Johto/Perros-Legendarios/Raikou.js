const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 243
        this.pokemon = 'Raikou'
        this.region = Entidades.Region.Johto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 178
        this.altura = 1.9
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('impactrueno'), 8],
            [move.get('ataque rápido'), 22],
            [move.get('chispa'), 29],
            [move.get('triturar'), 43],
            [move.get('colmillo rayo'), 50],
            [move.get('chispazo'), 57],
            [move.get('paranormal'), 64],
            [move.get('trueno'), 85],
        ]
        this.stats = {
            hp: 90,
            attack: 85,
            defense: 75,
            spattack: 115,
            spdefense: 100,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
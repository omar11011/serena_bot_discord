const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 245
        this.pokemon = 'Suicune'
        this.region = Entidades.Region.Johto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 187
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('rayo burbuja'), 8],
            [move.get('tornado'), 22],
            [move.get('rayo aurora'), 29],
            [move.get('manto espejo'), 43],
            [move.get('colmillo hielo'), 50],
            [move.get('humareda'), 57],
            [move.get('paranormal'), 64],
            [move.get('hidrobomba'), 71],
            [move.get('ventisca'), 85],
        ]
        this.stats = {
            hp: 100,
            attack: 75,
            defense: 115,
            spattack: 90,
            spdefense: 115,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
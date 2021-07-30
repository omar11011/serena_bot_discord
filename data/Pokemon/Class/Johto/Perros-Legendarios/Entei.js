const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 244
        this.pokemon = 'Entei'
        this.region = Entidades.Region.Johto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 198
        this.altura = 2.1
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('ascuas'), 8],
            [move.get('giro fuego'), 22],
            [move.get('pisotón'), 29],
            [move.get('lanzallamas'), 36],
            [move.get('colmillo ígneo'), 50],
            [move.get('humareda'), 57],
            [move.get('paranormal'), 64],
            [move.get('llamarada'), 71],
            [move.get('estallido'), 85],
        ]
        this.stats = {
            hp: 115,
            attack: 115,
            defense: 85,
            spattack: 90,
            spdefense: 75,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
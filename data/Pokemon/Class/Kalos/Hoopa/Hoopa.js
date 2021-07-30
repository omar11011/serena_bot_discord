const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 720
        this.pokemon = 'Hoopa'
        this.region = Entidades.Region.Kalos
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Hoopa Forma Desatada', null, 100),
        ]
        this.captura = 3
        this.amistad = 100
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('impresionar'), 6],
            [move.get('psicorrayo'), 19],
            [move.get('golpe fantasma'), 35],
            [move.get('cabezazo zen'), 46],
            [move.get('bola sombra'), 55],
            [move.get('psíquico'), 75],
            [move.get('paso dimensional'), 85],
        ]
        this.stats = {
            hp: 80,
            attack: 110,
            defense: 60,
            spattack: 150,
            spdefense: 130,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
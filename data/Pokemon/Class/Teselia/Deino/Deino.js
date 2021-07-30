const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 633
        this.pokemon = 'Deino'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 17.3
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Zweilous', 50),
        ]
        this.captura = 190
        this.amistad = 35
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('furia dragón'), 1],
            [move.get('mordisco'), 9],
            [move.get('golpe cabeza'), 12],
            [move.get('dragoaliento'), 17],
            [move.get('triturar'), 25],
            [move.get('atizar'), 28],
            [move.get('pulso dragón'), 32],
            [move.get('carga dragón'), 42],
            [move.get('golpe cuerpo'), 48],
            [move.get('vozarrón'), 58],
            [move.get('enfado'), 62],
        ]
        this.stats = {
            hp: 52,
            attack: 65,
            defense: 50,
            spattack: 45,
            spdefense: 50,
            speed: 38,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
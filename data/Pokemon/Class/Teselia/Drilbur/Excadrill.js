const Base = require('./Drilbur').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 530
        this.pokemon = 'Excadrill'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Acero,
        ]
        this.peso = 40.4
        this.altura = 0.7
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('giro rápido'), 5],
            [move.get('bofetón lodo'), 8],
            [move.get('golpes furia'), 12],
            [move.get('garra metal'), 15],
            [move.get('excavar'), 19],
            [move.get('cuchillada'), 26],
            [move.get('avalancha'), 29],
            [move.get('perforador'), 31],
            [move.get('terremoto'), 36],
            [move.get('taladradora'), 55],
            [move.get('fisura'), 62],
        ]
        this.stats = {
            hp: 110,
            attack: 135,
            defense: 60,
            spattack: 50,
            spdefense: 65,
            speed: 88,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
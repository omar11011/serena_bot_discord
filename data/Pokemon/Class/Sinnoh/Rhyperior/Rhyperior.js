const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 464
        this.pokemon = 'Rhyperior'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 282.8
        this.altura = 2.4
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Rhyperior', item.get('rhyperiorita')),
        ]
        this.captura = 30
        this.amistad = 50
        this.movimientos = [
            [move.get('puya nociva'), 1],
            [move.get('cornada'), 1],
            [move.get('ataque furia'), 5],
            [move.get('antiaéreo'), 13],
            [move.get('pisotón'), 17],
            [move.get('terratemblor'), 21],
            [move.get('guardia baja'), 25],
            [move.get('pedrada'), 29],
            [move.get('taladradora'), 33],
            [move.get('derribo'), 37],
            [move.get('roca afilada'), 41],
            [move.get('machada'), 42],
            [move.get('terremoto'), 48],
            [move.get('mega cuerno'), 55],
            [move.get('perforador'), 62],
            [move.get('romperrocas'), 69],
        ]
        this.stats = {
            hp: 115,
            attack: 140,
            defense: 130,
            spattack: 55,
            spdefense: 55,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
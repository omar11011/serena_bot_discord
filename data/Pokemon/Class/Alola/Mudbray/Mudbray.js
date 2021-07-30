const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 749
        this.pokemon = 'Mudbray'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 110
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Mudsdale', 30),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('bofetón lodo'), 1],
            [move.get('terratemblor'), 10],
            [move.get('doble patada'), 15],
            [move.get('pisotón'), 17],
            [move.get('fuerza equina'), 24],
            [move.get('cuerpo pesado'), 31],
            [move.get('contraataque'), 36],
            [move.get('terremoto'), 38],
            [move.get('mega patada'), 43],
            [move.get('fuerza bruta'), 45],
        ]
        this.stats = {
            hp: 70,
            attack: 100,
            defense: 70,
            spattack: 45,
            spdefense: 55,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
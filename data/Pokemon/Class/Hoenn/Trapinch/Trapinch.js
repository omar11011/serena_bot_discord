const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 328
        this.pokemon = 'Trapinch'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 15
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Vibrava', 35),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('finta'), 1],
            [move.get('terratemblor'), 8],
            [move.get('bucle arena'), 12],
            [move.get('avalancha'), 15],
            [move.get('excavar'), 19],
            [move.get('triturar'), 22],
            [move.get('tierra viva'), 26],
            [move.get('amago'), 29],
            [move.get('terremoto'), 33],
            [move.get('fuerza bruta'), 40],
            [move.get('hiperrayo'), 43],
            [move.get('fisura'), 47],
        ]
        this.stats = {
            hp: 45,
            attack: 100,
            defense: 45,
            spattack: 45,
            spdefense: 45,
            speed: 10,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
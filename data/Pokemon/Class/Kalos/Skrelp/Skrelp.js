const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 690
        this.pokemon = 'Skrelp'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 37.3
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dragalge', 48),
        ]
        this.captura = 225
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('finta'), 5],
            [move.get('burbuja'), 12],
            [move.get('ácido'), 15],
            [move.get('cola veneno'), 23],
            [move.get('hidropulso'), 25],
            [move.get('acua cola'), 35],
            [move.get('bomba lodo'), 38],
            [move.get('hidrobomba'), 42],
            [move.get('pulso dragón'), 49],
        ]
        this.stats = {
            hp: 50,
            attack: 60,
            defense: 60,
            spattack: 60,
            spdefense: 60,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
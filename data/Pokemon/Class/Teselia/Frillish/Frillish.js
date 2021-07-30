const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 592
        this.pokemon = 'Frillish'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 33
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Jellicent', 40),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('absorber'), 5],
            [move.get('tinieblas'), 9],
            [move.get('rayo burbuja'), 13],
            [move.get('hidropulso'), 22],
            [move.get('viento aciago'), 27],
            [move.get('salmuera'), 32],
            [move.get('infortunio'), 43],
            [move.get('hidrobomba'), 49],
            [move.get('estrujón'), 51],
            [move.get('salpicar'), 61],
        ]
        this.stats = {
            hp: 55,
            attack: 40,
            defense: 50,
            spattack: 65,
            spdefense: 85,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
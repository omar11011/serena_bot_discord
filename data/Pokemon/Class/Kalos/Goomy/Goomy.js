const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 704
        this.pokemon = 'Goomy'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 2.8
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sliggoo', 40),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('burbuja'), 1],
            [move.get('absorber'), 5],
            [move.get('dragoaliento'), 18],
            [move.get('azote'), 28],
            [move.get('golpe cuerpo'), 32],
            [move.get('agua lodosa'), 38],
            [move.get('pulso dragón'), 42],
        ]
        this.stats = {
            hp: 45,
            attack: 50,
            defense: 35,
            spattack: 55,
            spdefense: 75,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
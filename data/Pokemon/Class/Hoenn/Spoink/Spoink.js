const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 325
        this.pokemon = 'Spoink'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 30.6
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Grumpig', 32),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('psicoonda'), 7],
            [move.get('cabezazo zen'), 26],
            [move.get('joya de luz'), 29],
            [move.get('ronquido'), 33],
            [move.get('psicocarga'), 38],
            [move.get('vendetta'), 40],
            [move.get('psíquico'), 44],
            [move.get('bote'), 50],
        ]
        this.stats = {
            hp: 60,
            attack: 25,
            defense: 35,
            spattack: 70,
            spdefense: 80,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
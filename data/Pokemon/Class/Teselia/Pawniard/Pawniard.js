const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 624
        this.pokemon = 'Pawniard'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 10.2
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Bisharp', 52),
        ]
        this.captura = 120
        this.amistad = 35
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('corte furia'), 9],
            [move.get('finta'), 17],
            [move.get('garra metal'), 25],
            [move.get('cuchillada'), 30],
            [move.get('buena baza'), 33],
            [move.get('tajo umbrío'), 49],
            [move.get('cabeza de hierro'), 54],
            [move.get('guillotina'), 62],
        ]
        this.stats = {
            hp: 45,
            attack: 85,
            defense: 70,
            spattack: 40,
            spdefense: 40,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
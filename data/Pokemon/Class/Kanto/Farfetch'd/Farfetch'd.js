const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 83
        this.pokemon = "Farfetch'd"
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 15
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('puya nociva'), 1],
            [move.get('picotazo'), 1],
            [move.get('golpes furia'), 1],
            [move.get('ataque furia'), 7],
            [move.get('golpe aéreo'), 9],
            [move.get('desarme'), 13],
            [move.get('cuchillada'), 19],
            [move.get('aire afilado'), 21],
            [move.get('tajo umbrío'), 33],
            [move.get('acróbata'), 37],
            [move.get('amago'), 43],
            [move.get('falsotortazo'), 45],
            [move.get('tajo aéreo'), 49],
            [move.get('pájaro osado'), 55],
        ]
        this.stats = {
            hp: 52,
            attack: 90,
            defense: 55,
            spattack: 58,
            spdefense: 62,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
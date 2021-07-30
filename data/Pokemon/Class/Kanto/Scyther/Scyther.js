const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 123
        this.pokemon = 'Scyther'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 56
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Scizor', item.get('revestimiento metálico'))
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('onda vacío'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('persecución'), 9],
            [move.get('falsotortazo'), 13],
            [move.get('ataque ala'), 21],
            [move.get('corte furia'), 25],
            [move.get('cuchillada'), 29],
            [move.get('viento cortante'), 33],
            [move.get('tijera x'), 41],
            [move.get('tajo umbrío'), 45],
            [move.get('doble golpe'), 49],
            [move.get('tajo aéreo'), 50],
            [move.get('amago'), 61],
        ]
        this.stats = {
            hp: 70,
            attack: 110,
            defense: 80,
            spattack: 55,
            spdefense: 80,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
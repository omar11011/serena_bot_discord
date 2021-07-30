const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 212
        this.pokemon = 'Scizor'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 118
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Scizor', item.get('scizorita'))
        ]
        this.captura = 25
        this.amistad = 50
        this.movimientos = [
            [move.get('onda vacío'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('puño bala'), 1],
            [move.get('persecución'), 9],
            [move.get('falsotortazo'), 13],
            [move.get('garra metal'), 21],
            [move.get('corte furia'), 25],
            [move.get('cuchillada'), 29],
            [move.get('viento cortante'), 33],
            [move.get('tijera x'), 41],
            [move.get('tajo umbrío'), 45],
            [move.get('doble golpe'), 49],
            [move.get('cabeza de hierro'), 50],
            [move.get('amago'), 61],
        ]
        this.stats = {
            hp: 70,
            attack: 130,
            defense: 100,
            spattack: 55,
            spdefense: 80,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
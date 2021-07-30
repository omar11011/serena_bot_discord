const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 359
        this.pokemon = 'Absol'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 47
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Absol', item.get('absolita')),
        ]
        this.captura = 30
        this.amistad = 35
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('amago'), 1],
            [move.get('ataque rápido'), 7],
            [move.get('persecución'), 10],
            [move.get('mordisco'), 16],
            [move.get('cuchillada'), 22],
            [move.get('tajo umbrío'), 29],
            [move.get('psicocorte'), 37],
            [move.get('golpe bajo'), 45],
            [move.get('viento cortante'), 49],
            [move.get('premonición'), 53],
        ]
        this.stats = {
            hp: 65,
            attack: 130,
            defense: 60,
            spattack: 75,
            spdefense: 60,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
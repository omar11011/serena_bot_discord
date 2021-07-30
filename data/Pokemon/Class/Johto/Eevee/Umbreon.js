const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 197
        this.pokemon = 'Umbreon'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 27
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Umbreon', item.get('umbreonita'))
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('persecución'), 9],
            [move.get('ataque rápido'), 13],
            [move.get('finta'), 20],
            [move.get('golpe cabeza'), 20],
            [move.get('buena baza'), 25],
            [move.get('bola sombra'), 30],
            [move.get('última baza'), 41],
        ]
        this.stats = {
            hp: 95,
            attack: 65,
            defense: 110,
            spattack: 60,
            spdefense: 130,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
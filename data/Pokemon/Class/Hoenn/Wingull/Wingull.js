const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 278
        this.pokemon = 'Wingull'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 9.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Pelipper', 25),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('ataque ala'), 8],
            [move.get('hidropulso'), 15],
            [move.get('ataque rápido'), 19],
            [move.get('aire afilado'), 22],
            [move.get('persecución'), 26],
            [move.get('golpe aéreo'), 29],
            [move.get('tajo aéreo'), 40],
            [move.get('vendaval'), 43],
        ]
        this.stats = {
            hp: 40,
            attack: 30,
            defense: 30,
            spattack: 55,
            spdefense: 30,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
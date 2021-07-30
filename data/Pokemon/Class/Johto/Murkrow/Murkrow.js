const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 198
        this.pokemon = 'Murkrow'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2.1
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Item('Honchkrow', item.get('piedra noche'))
        ]
        this.captura = 30
        this.amistad = 35
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('impresionar'), 1],
            [move.get('persecución'), 5],
            [move.get('ataque ala'), 15],
            [move.get('tinieblas'), 21],
            [move.get('buena baza'), 25],
            [move.get('finta'), 35],
            [move.get('juego sucio'), 45],
            [move.get('golpe bajo'), 45],
        ]
        this.stats = {
            hp: 60,
            attack: 65,
            defense: 85,
            spattack: 85,
            spdefense: 42,
            speed: 91,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
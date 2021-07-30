const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 302
        this.pokemon = 'Sableye'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 11
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Sableye', item.get('sableynita')),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('tinieblas'), 6],
            [move.get('impresionar'), 9],
            [move.get('golpes furia'), 11],
            [move.get('sombra vil'), 16],
            [move.get('finta'), 19],
            [move.get('sorpresa'), 21],
            [move.get('castigo'), 24],
            [move.get('desarme'), 26],
            [move.get('garra umbría'), 29],
            [move.get('cabezazo zen'), 34],
            [move.get('joya de luz'), 36],
            [move.get('bola sombra'), 39],
            [move.get('juego sucio'), 41],
        ]
        this.stats = {
            hp: 50,
            attack: 75,
            defense: 75,
            spattack: 65,
            spdefense: 65,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
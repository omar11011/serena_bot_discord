const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 56
        this.pokemon = 'Mankey'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 28
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Primeape', 28),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('antojo'), 1],
            [move.get('arañazo'), 1],
            [move.get('golpes furia'), 5],
            [move.get('patada baja'), 6],
            [move.get('golpe kárate'), 8],
            [move.get('persecución'), 12],
            [move.get('tajo cruzado'), 22],
            [move.get('buena baza'), 26],
            [move.get('castigo'), 29],
            [move.get('golpe'), 33],
            [move.get('a bocajarro'), 36],
            [move.get('pataleta'), 43],
            [move.get('enfado'), 47],
        ]
        this.stats = {
            hp: 40,
            attack: 80,
            defense: 35,
            spattack: 35,
            spdefense: 45,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 656
        this.pokemon = 'Froakie'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 7
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Frogadier', 16),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('burbuja'), 5],
            [move.get('ataque rápido'), 8],
            [move.get('lengüetazo'), 10],
            [move.get('hidropulso'), 14],
            [move.get('canon'), 21],
            [move.get('lanzamiento'), 25],
            [move.get('antiaéreo'), 29],
            [move.get('bote'), 39],
            [move.get('hidrobomba'), 48],
        ]
        this.stats = {
            hp: 41,
            attack: 56,
            defense: 40,
            spattack: 62,
            spdefense: 44,
            speed: 71,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
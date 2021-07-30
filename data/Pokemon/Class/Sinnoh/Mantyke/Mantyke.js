const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 458
        this.pokemon = 'Mantyke'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 65
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Mantine', 15),
        ]
        this.captura = 25
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('burbuja'), 1],
            [move.get('rayo burbuja'), 7],
            [move.get('ataque ala'), 14],
            [move.get('golpe cabeza'), 16],
            [move.get('hidropulso'), 19],
            [move.get('derribo'), 27],
            [move.get('tajo aéreo'), 36],
            [move.get('bote'), 46],
            [move.get('hidrobomba'), 49],
        ]
        this.stats = {
            hp: 45,
            attack: 20,
            defense: 50,
            spattack: 60,
            spdefense: 120,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
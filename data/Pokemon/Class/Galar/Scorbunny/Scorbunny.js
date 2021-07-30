const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 813
        this.pokemon = 'Scorbunny'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 4.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Raboot', 16),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 6],
            [move.get('ataque rápido'), 8],
            [move.get('doble patada'), 12],
            [move.get('nitrocarga'), 17],
            [move.get('golpe cabeza'), 24],
            [move.get('contraataque'), 28],
            [move.get('bote'), 32],
            [move.get('doble filo'), 36],
        ]
        this.stats = {
            hp: 50,
            attack: 71,
            defense: 40,
            spattack: 40,
            spdefense: 40,
            speed: 69,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
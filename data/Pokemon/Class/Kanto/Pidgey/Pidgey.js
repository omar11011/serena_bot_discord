const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 16
        this.pokemon = 'Pidgey'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal, 
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 1.8
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Pidgeotto', 18),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('tornado'), 9],
            [move.get('ataque rápido'), 13],
            [move.get('ciclón'), 21],
            [move.get('ataque ala'), 33],
            [move.get('tajo aéreo'), 49],
            [move.get('vendaval'), 53],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 40,
            spattack: 35,
            spdefense: 35,
            speed: 56,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
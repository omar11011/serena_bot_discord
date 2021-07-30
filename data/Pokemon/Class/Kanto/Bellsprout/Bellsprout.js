const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 69
        this.pokemon = 'Bellsprout'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 4
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Weepinbell', 21),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('látigo cepa'), 1],
            [move.get('constricción'), 11],
            [move.get('ácido'), 23],
            [move.get('desarme'), 27],
            [move.get('hoja afilada'), 39],
            [move.get('puya nociva'), 41],
            [move.get('atizar'), 47],
            [move.get('estrujón'), 50],
        ]
        this.stats = {
            hp: 50,
            attack: 75,
            defense: 35,
            spattack: 70,
            spdefense: 30,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
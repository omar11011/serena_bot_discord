const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 728
        this.pokemon = 'Popplio'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 7.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Brionne', 17),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('pistola agua'), 1],
            [move.get('voz cautivadora'), 8],
            [move.get('acua jet'), 14],
            [move.get('viento hielo'), 16],
            [move.get('rayo burbuja'), 22],
            [move.get('doble bofetón'), 29],
            [move.get('vozarrón'), 32],
            [move.get('fuerza lunar'), 36],
            [move.get('hidrobomba'), 43],
        ]
        this.stats = {
            hp: 50,
            attack: 54,
            defense: 54,
            spattack: 66,
            spdefense: 56,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
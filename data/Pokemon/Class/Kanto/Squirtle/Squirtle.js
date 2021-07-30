const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 7
        this.pokemon = 'Squirtle'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo, 
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Wartortle', 16),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 7],
            [move.get('burbuja'), 13],
            [move.get('mordisco'), 16],
            [move.get('giro rápido'), 19],
            [move.get('hidropulso'), 25],
            [move.get('acua cola'), 28],
            [move.get('cabezazo'), 31],
            [move.get('hidrobomba'), 40],
        ]
        this.stats = {
            hp: 44,
            attack: 48,
            defense: 65,
            spattack: 50,
            spdefense: 64,
            speed: 43,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
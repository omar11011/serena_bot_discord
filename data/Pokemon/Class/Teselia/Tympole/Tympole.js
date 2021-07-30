const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 535
        this.pokemon = 'Tympole'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 4.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Palpitoad', 25),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('canon'), 9],
            [move.get('rayo burbuja'), 12],
            [move.get('disparo lodo'), 16],
            [move.get('alboroto'), 23],
            [move.get('agua lodosa'), 27],
            [move.get('azote'), 34],
            [move.get('eco voz'), 38],
            [move.get('hidrobomba'), 42],
            [move.get('vozarrón'), 45],
        ]
        this.stats = {
            hp: 50,
            attack: 50,
            defense: 40,
            spattack: 50,
            spdefense: 40,
            speed: 64,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 163
        this.pokemon = 'Hoothoot'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 21.2
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Noctowl', 20),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picotazo'), 7],
            [move.get('confusión'), 10],
            [move.get('eco voz'), 13],
            [move.get('cabezazo zen'), 16],
            [move.get('paranormal'), 22],
            [move.get('derribo'), 25],
            [move.get('tajo aéreo'), 31],
            [move.get('alboroto'), 34],
            [move.get('fuerza lunar'), 41],
            [move.get('sincorruido'), 43],
            [move.get('come sueños'), 46],
        ]
        this.stats = {
            hp: 60,
            attack: 30,
            defense: 30,
            spattack: 36,
            spdefense: 56,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
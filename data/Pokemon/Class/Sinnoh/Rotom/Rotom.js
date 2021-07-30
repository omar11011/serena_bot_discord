const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 479
        this.pokemon = 'Rotom'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 0.3
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('impactrueno'), 1],
            [move.get('alboroto'), 8],
            [move.get('onda voltio'), 22],
            [move.get('viento aciago'), 29],
            [move.get('bola voltio'), 43],
            [move.get('infortunio'), 50],
            [move.get('chispazo'), 64],
        ]
        this.stats = {
            hp: 70,
            attack: 80,
            defense: 70,
            spattack: 80,
            spdefense: 70,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
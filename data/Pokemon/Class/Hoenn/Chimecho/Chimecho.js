const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 358
        this.pokemon = 'Chimecho'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 1
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impresionar'), 7],
            [move.get('confusión'), 10],
            [move.get('psicoonda'), 16],
            [move.get('derribo'), 19],
            [move.get('paranormal'), 22],
            [move.get('alboroto'), 32],
            [move.get('doble filo'), 42],
            [move.get('sincorruido'), 52],
        ]
        this.stats = {
            hp: 75,
            attack: 50,
            defense: 80,
            spattack: 95,
            spdefense: 90,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
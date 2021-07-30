const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 821
        this.pokemon = 'Rookidee'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 1.8
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Corvisquire', 18),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('chulería'), 4],
            [move.get('ataque furia'), 12],
            [move.get('picoteo'), 16],
            [move.get('pico taladro'), 28],
            [move.get('pájaro osado'), 36],
        ]
        this.stats = {
            hp: 38,
            attack: 47,
            defense: 35,
            spattack: 33,
            spdefense: 35,
            speed: 57,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
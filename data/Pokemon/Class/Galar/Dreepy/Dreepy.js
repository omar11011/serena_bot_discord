const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 885
        this.pokemon = 'Dreepy'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 2
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Drakloak', 50),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('acoso'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('mordisco'), 1],
        ]
        this.stats = {
            hp: 28,
            attack: 60,
            defense: 30,
            spattack: 40,
            spdefense: 30,
            speed: 82,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
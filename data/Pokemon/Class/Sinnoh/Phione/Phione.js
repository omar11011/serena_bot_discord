const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 489
        this.pokemon = 'Phione'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 3.1
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 30
        this.amistad = 70
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('rayo burbuja'), 24],
            [move.get('torbellino'), 39],
            [move.get('hidropulso'), 46],
            [move.get('buceo'), 61],
        ]
        this.stats = {
            hp: 80,
            attack: 80,
            defense: 80,
            spattack: 80,
            spdefense: 80,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
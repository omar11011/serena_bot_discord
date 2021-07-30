const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 490
        this.pokemon = 'Manaphy'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 1.4
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 3
        this.amistad = 70
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('rayo burbuja'), 24],
            [move.get('torbellino'), 39],
            [move.get('hidropulso'), 46],
            [move.get('buceo'), 61],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 100,
            spattack: 100,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
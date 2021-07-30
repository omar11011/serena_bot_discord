const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 808
        this.pokemon = 'Meltan'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 8
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Melmetal', 50),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('golpe cabeza'), 1],
            [move.get('impactrueno'), 27],
            [move.get('foco resplandor'), 45],
        ]
        this.stats = {
            hp: 46,
            attack: 65,
            defense: 65,
            spattack: 55,
            spdefense: 35,
            speed: 34,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
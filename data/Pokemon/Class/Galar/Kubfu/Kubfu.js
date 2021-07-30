const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 891
        this.pokemon = 'Kubfu'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 12
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Urshifu Brusco', 50),
            new Entidades.Evolucion.Nivel('Urshifu Fluido', 50),
        ]
        this.captura = 3
        this.amistad = 50
        this.movimientos = [
            [move.get('golpe roca'), 1],
            [move.get('golpe aéreo'), 12],
            [move.get('golpe cabeza'), 20],
            [move.get('demolición'), 24],
            [move.get('cabeza de hierro'), 36],
            [move.get('puño dinámico'), 40],
            [move.get('contraataque'), 44],
            [move.get('a bocajarro'), 48],
            [move.get('puño certero'), 52],
        ]
        this.stats = {
            hp: 60,
            attack: 90,
            defense: 60,
            spattack: 53,
            spdefense: 50,
            speed: 72,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
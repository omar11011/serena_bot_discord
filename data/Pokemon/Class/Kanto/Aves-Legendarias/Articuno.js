const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 144
        this.pokemon = 'Articuno'
        this.region = Entidades.Region.Kanto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 55.4
        this.altura = 1.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('picotazo'), 1],
            [move.get('nieve polvo'), 1],
            [move.get('canto helado'), 15],
            [move.get('poder pasado'), 29],
            [move.get('liofilización'), 43],
            [move.get('rayo hielo'), 71],
            [move.get('ventisca'), 78],
            [move.get('vendaval'), 91],
            [move.get('frío polar'), 99],
        ]
        this.stats = {
            hp: 90,
            attack: 85,
            defense: 100,
            spattack: 95,
            spdefense: 125,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
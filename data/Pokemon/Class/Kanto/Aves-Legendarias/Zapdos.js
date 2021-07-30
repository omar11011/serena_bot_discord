const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 145
        this.pokemon = 'Zapdos'
        this.region = Entidades.Region.Kanto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 52.6
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('impactrueno'), 1],
            [move.get('picotazo'), 1],
            [move.get('picoteo'), 22],
            [move.get('poder pasado'), 29],
            [move.get('chispazo'), 50],
            [move.get('pico taladro'), 71],
            [move.get('trueno'), 78],
            [move.get('electrocañón'), 99],
        ]
        this.stats = {
            hp: 90,
            attack: 90,
            defense: 85,
            spattack: 125,
            spdefense: 90,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
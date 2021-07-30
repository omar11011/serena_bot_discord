const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 795
        this.pokemon = 'Pheromosa'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 25
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 45
        this.amistad = 0
        this.movimientos = [
            [move.get('patada baja'), 1],
            [move.get('giro rápido'), 1],
            [move.get('doble patada'), 1],
            [move.get('rapidez'), 7],
            [move.get('pisotón'), 13],
            [move.get('amago'), 19],
            [move.get('viento plata'), 23],
            [move.get('bote'), 29],
            [move.get('patada salto'), 31],
            [move.get('triple patada'), 43],
            [move.get('plancha'), 47],
            [move.get('zumbido'), 53],
            [move.get('patada salto alta'), 67],
        ]
        this.stats = {
            hp: 71,
            attack: 137,
            defense: 37,
            spattack: 137,
            spdefense: 37,
            speed: 151,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
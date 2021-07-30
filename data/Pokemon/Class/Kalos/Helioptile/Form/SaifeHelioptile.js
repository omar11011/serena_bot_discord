const Base = require('../Helioptile').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Helioptile de Saife'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Heliolisk de Saife', 26),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('impresionar'), 1],
            [move.get('puño bala'), 6],
            [move.get('nitrocarga'), 13],
            [move.get('ataque rápido'), 17],
            [move.get('puño meteoro'), 22],
            [move.get('pirotecnia'), 25],
            [move.get('sofoco'), 35],
            [move.get('cola férrea'), 40],
            [move.get('deseo oculto'), 44],
            [move.get('hiperrayo'), 49],
        ]
        this.stats = {
            hp: 44,
            attack: 38,
            defense: 33,
            spattack: 61,
            spdefense: 43,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
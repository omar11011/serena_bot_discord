const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 491
        this.pokemon = 'Darkrai'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 50.5
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('viento aciago'), 1],
            [move.get('tinieblas'), 1],
            [move.get('ataque rápido'), 11],
            [move.get('persecución'), 29],
            [move.get('finta'), 29],
            [move.get('rayo hielo'), 33],
            [move.get('bola sombra'), 41],
            [move.get('puño certero'), 70],
            [move.get('come sueños'), 84],
            [move.get('pulso umbrío'), 93],
        ]
        this.stats = {
            hp: 70,
            attack: 90,
            defense: 90,
            spattack: 135,
            spdefense: 90,
            speed: 125,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
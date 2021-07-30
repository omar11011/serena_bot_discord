const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 802
        this.pokemon = 'Marshadow'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 22.2
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Marshadow Forma Cénit', item.get('marshastal z')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('buena baza'), 1],
            [move.get('puño fuego'), 1],
            [move.get('puño hielo'), 1],
            [move.get('puño trueno'), 1],
            [move.get('puño drenaje'), 1],
            [move.get('contraataque'), 1],
            [move.get('persecución'), 1],
            [move.get('sombra vil'), 1],
            [move.get('palmeo'), 5],
            [move.get('amago'), 11],
            [move.get('patada giro'), 15],
            [move.get('puño sombra'), 26],
            [move.get('patada salto'), 35],
            [move.get('roba sombra'), 45],
            [move.get('a bocajarro'), 50],
            [move.get('golpe bajo'), 56],
            [move.get('esfuerzo'), 60],
        ]
        this.stats = {
            hp: 90,
            attack: 125,
            defense: 80,
            spattack: 90,
            spdefense: 90,
            speed: 125,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
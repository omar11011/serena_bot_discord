const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 913
        this.pokemon = 'Baby Groudon'
        this.region = Entidades.Region.Saife
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 40
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Groudon', 100)
        ]
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('poder pasado'), 1],
            [move.get('disparo lodo'), 1],
            [move.get('tierra viva'), 15],
            [move.get('humareda'), 20],
            [move.get('terremoto'), 40],
            [move.get('filo del abismo'), 45],
            [move.get('rayo solar'), 60],
            [move.get('fisura'), 65],
            [move.get('llamarada'), 75],
            [move.get('machada'), 80],
            [move.get('estallido'), 90],
        ]
        this.stats = {
            hp: 65,
            attack: 100,
            defense: 110,
            spattack: 50,
            spdefense: 60,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
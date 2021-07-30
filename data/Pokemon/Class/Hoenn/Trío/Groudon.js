const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 383
        this.pokemon = 'Groudon'
        this.region = Entidades.Region.Hoenn
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 950
        this.altura = 3.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Groudon Primigenio', item.get('prisma rojo')),
            new Entidades.Evolucion.Gigamax('Groudon Gigamax'),
        ]
        this.captura = 3
        this.amistad = 0
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
            hp: 100,
            attack: 150,
            defense: 140,
            spattack: 100,
            spdefense: 90,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
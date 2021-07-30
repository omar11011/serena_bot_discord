const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 382
        this.pokemon = 'Kyogre'
        this.region = Entidades.Region.Hoenn
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 352
        this.altura = 4.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Kyogre Primigenio', item.get('prisma azul')),
            new Entidades.Evolucion.Gigamax('Kyogre Gigamax'),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('poder pasado'), 1],
            [move.get('hidropulso'), 1],
            [move.get('acua cola'), 15],
            [move.get('golpe cuerpo'), 20],
            [move.get('rayo hielo'), 40],
            [move.get('pulso primigenio'), 45],
            [move.get('agua lodosa'), 60],
            [move.get('frío polar'), 65],
            [move.get('hidrobomba'), 75],
            [move.get('doble filo'), 80],
            [move.get('salpicar'), 90],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 90,
            spattack: 150,
            spdefense: 140,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
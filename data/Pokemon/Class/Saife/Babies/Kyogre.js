const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 912
        this.pokemon = 'Baby Kyogre'
        this.region = Entidades.Region.Saife
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 45
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Kyogre', 100),
        ]
        this.captura = 120
        this.amistad = 70
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
            hp: 65,
            attack: 50,
            defense: 60,
            spattack: 100,
            spdefense: 110,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
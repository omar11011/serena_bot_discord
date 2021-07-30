const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 636
        this.pokemon = 'Larvesta'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 28.8
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Volcarona', 59),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('chupavidas'), 10],
            [move.get('derribo'), 20],
            [move.get('nitrocarga'), 30],
            [move.get('picadura'), 40],
            [move.get('doble filo'), 50],
            [move.get('rueda fuego'), 60],
            [move.get('zumbido'), 70],
            [move.get('golpe'), 90],
            [move.get('envite ígneo'), 100],
        ]
        this.stats = {
            hp: 55,
            attack: 85,
            defense: 55,
            spattack: 50,
            spdefense: 55,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
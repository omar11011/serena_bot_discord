const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 540
        this.pokemon = 'Sewaddle'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Swadloon', 20),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picadura'), 8],
            [move.get('hoja afilada'), 15],
            [move.get('estoicismo'), 22],
            [move.get('zumbido'), 36],
            [move.get('azote'), 43],
        ]
        this.stats = {
            hp: 45,
            attack: 53,
            defense: 70,
            spattack: 40,
            spdefense: 60,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
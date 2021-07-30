const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 616
        this.pokemon = 'Shelmet'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Bicho,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 7.7
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Accelgor'),
        ]
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('chupavidas'), 1],
            [move.get('ácido'), 4],
            [move.get('estoicismo'), 16],
            [move.get('megaagotar'), 20],
            [move.get('gigadrenado'), 37],
            [move.get('golpe cuerpo'), 40],
            [move.get('zumbido'), 44],
        ]
        this.stats = {
            hp: 50,
            attack: 40,
            defense: 85,
            spattack: 40,
            spdefense: 65,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
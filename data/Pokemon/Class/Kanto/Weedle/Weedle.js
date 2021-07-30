const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 13
        this.pokemon = 'Weedle'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Bicho, 
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Kakuna', 7),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('picotazo venenoso'), 1],
            [move.get('picadura'), 9],
        ]
        this.stats = {
            hp: 45,
            attack: 35,
            defense: 30,
            spattack: 20,
            spdefense: 20,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
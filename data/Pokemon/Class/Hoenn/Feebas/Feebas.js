const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 349
        this.pokemon = 'Feebas'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 7.4
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Milotic', item.get('escama bella')),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('azote'), 30],
        ]
        this.stats = {
            hp: 20,
            attack: 15,
            defense: 20,
            spattack: 10,
            spdefense: 55,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 333
        this.pokemon = 'Swablu'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 1.2
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Dragón,
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Altaria', 35)
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('impresionar'), 3],
            [move.get('ataque furia'), 7],
            [move.get('voz cautivadora'), 11],
            [move.get('canon'), 17],
            [move.get('don natural'), 20],
            [move.get('derribo'), 23],
            [move.get('pulso dragón'), 38],
            [move.get('fuerza lunar'), 46],
        ]
        this.stats = {
            hp: 45,
            attack: 40,
            defense: 60,
            spattack: 40,
            spdefense: 75,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
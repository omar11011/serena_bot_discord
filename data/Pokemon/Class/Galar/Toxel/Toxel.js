const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 848
        this.pokemon = 'Toxel'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Veneno,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 11
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Toxtricity Agudo', 30),
            new Entidades.Evolucion.Nivel('Toxtricity Grave', 30),
        ]
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('moflete estático'), 1],
            [move.get('azote'), 1],
            [move.get('ácido'), 1],
            [move.get('eructo'), 40],
        ]
        this.stats = {
            hp: 40,
            attack: 38,
            defense: 35,
            spattack: 54,
            spdefense: 35,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
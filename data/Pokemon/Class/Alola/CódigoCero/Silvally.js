const Base = require('./CódigoCero').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 773
        this.pokemon = 'Silvally'
        this.peso = 100.5
        this.altura = 2.3
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Silvally', item.get('silvallyta')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Acero', item.get('disco acero')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Lucha', item.get('disco lucha')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Volador', item.get('disco cielo')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Veneno', item.get('disco veneno')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Tierra', item.get('disco tierra')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Roca', item.get('disco roca')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Bicho', item.get('disco bicho')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Fantasma', item.get('disco fantasma')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Fuego', item.get('disco flama')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Agua', item.get('disco agua')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Planta', item.get('disco planta')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Eléctrico', item.get('disco trueno')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Psíquico', item.get('disco mente')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Hielo', item.get('disco hielo')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Dragón', item.get('disco draco')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Siniestro', item.get('disco siniestro')),
            new Entidades.Evolucion.Temporal('Silvally Tipo Hada', item.get('disco hada')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('cabeza de hierro'), 1],
            [move.get('colmillo veneno'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('furia'), 5],
            [move.get('persecución'), 10],
            [move.get('mordisco'), 15],
            [move.get('golpe aéreo'), 20],
            [move.get('garra brutal'), 25],
            [move.get('tijera x'), 30],
            [move.get('derribo'), 40],
            [move.get('triturar'), 50],
            [move.get('multiataque'), 50],
            [move.get('doble golpe'), 55],
            [move.get('tajo aéreo'), 60],
            [move.get('castigo'), 65],
            [move.get('viento cortante'), 70],
            [move.get('triataque'), 75],
            [move.get('doble filo'), 80],
        ]
        this.stats = {
            hp: 95,
            attack: 95,
            defense: 95,
            spattack: 95,
            spdefense: 95,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}
class Movimiento {
    constructor() {
        this.damage = (potencia, nivel, ataque, defensa, efectividad) => {
            const random = Math.ceil(Math.random() * 16) + 84
            return Math.round(efectividad * random * ((((0.2 * nivel + 1) * ataque * potencia) / (25 * defensa)) + 2) * 0.01)
        }
    }
}

module.exports = Movimiento
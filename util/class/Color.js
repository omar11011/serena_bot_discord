class Color {

    constructor() {
        this.list = require('../functions/getColors')

        this.intToHex = int => {
            const hex = int.toString(16)
            return hex.length == 1 ? "0" + hex : hex
        }

        this.rgbToHex = (r, g, b) => {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        }

        this.hexToRgb = hex => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null
        }
    }

}

module.exports = Color
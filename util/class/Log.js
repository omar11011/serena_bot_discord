const chalk = require('chalk')
const moment = require('moment')

class Log {

    constructor() {
        this.getTime = () => {
            return moment().format('LLL')
        }

        this.log = msg => {
            console.log(this.getTime() + ' | ' + chalk.cyan(msg))
        }

        this.success = msg => {
            console.log(this.getTime() + ' | ' + chalk.green(msg))
        }

        this.alert = msg => {
            console.log(this.getTime() + ' | ' + chalk.yellow(msg))
        }

        this.error = msg => {
            console.log(this.getTime() + ' | ' + chalk.red(msg))
        }
    }

}

module.exports = new Log()
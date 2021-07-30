const convertTime = timeArgs => {
    let hours = 0
    let minutes = 0
    let seconds = 0
    let result = { error: false, typeError: [] }

    for(let i = 0; i < timeArgs.length; i++) {
        const cifras = timeArgs[i].split("")
        const end = cifras[cifras.length - 1]

        if(['h', 'm', 's'].includes(end)) {
            cifras.pop()

            if(!isNaN(cifras.join(""))) {
                const timeSum = parseInt(cifras.join(""))

                if(timeSum > 0) {
                    if(end == 'h' && hours == 0) {
                        if(timeSum > 48) {
                            result.error = true
                            result.typeError.push('❌ Las horas no pueden ser superiores a 48.')
                        } else hours = timeSum
                    } else if(end == 'm' && minutes == 0) {
                        if(timeSum > 60) {
                            result.error = true
                            result.typeError.push('❌ Los minutos no pueden ser superiores a 60.')
                        } else minutes = timeSum
                    } else if(end == 's' && seconds == 0) {
                        if(timeSum > 60) {
                            result.error = true
                            result.typeError.push('❌ Los segundos no pueden ser superiores a 60.')
                        } else seconds = timeSum
                    }
                }
            }
        }
    }

    result.time = ((hours * 3600) + (minutes * 60) + seconds)

    return result
}

module.exports = convertTime
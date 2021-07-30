// Módulos
const { readdir } = require('fs')
const client = require('../util/class/Client')

// Comandos de Discord
readdir(__dirname + '/commands', (err, folder) => {
    folder.forEach(c => {
        readdir(__dirname + '/commands/' + c, (err, files) => {
            console.log(`Cargando ${files.length} comandos del módulo ${c}.`)
            files.forEach(f => {
                const Command = require(__dirname + '/commands/' + c + '/' + f)
                const command = new Command()
                
                client.commands.push(command)
            })
        })
    })
})

// Eventos de Discord
readdir(__dirname + '/events', (err, files) => {
    files.forEach(f => {
        const Event = require(__dirname + '/events/' + f)
        const event = new Event()
        
        client.on(event.nombre, event.exec.bind(null))
    })
})
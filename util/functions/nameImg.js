const nameImg = name => {
    name = name.trim().split("")

    for(let i = 0; i < name.length; i++) {
        if(name[i] == 'á') name[i] = 'a'
        else if(name[i] == 'é') name[i] = 'e'
        else if(name[i] == 'í') name[i] = 'i'
        else if(name[i] == 'ó') name[i] = 'o'
        else if(name[i] == 'ú') name[i] = 'u'
        else if(name[i] == 'ñ') name[i] = 'n'
        else if(name[i] == '%') name[i] = ''
    }

    return name.join("")
}

module.exports = nameImg
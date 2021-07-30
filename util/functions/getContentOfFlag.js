const getContentOfFlag = (content, contentParams, flag) => {
    let positionContentArgs = contentParams.indexOf(flag)
    let allContentArgs = content[positionContentArgs]
    let contentArgs = allContentArgs.split(" ")

    contentArgs.splice(0, 1)

    return contentArgs
}

module.exports = getContentOfFlag
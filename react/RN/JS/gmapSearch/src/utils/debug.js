const cl = (label = null, val) => {
    return console.log(label, JSON.stringify(val, '\t', 2))
}

export default cl
const flatten = (array) => {

    let result = []

    for (const item of array) {
        if (Array.isArray(array)) {
            result = result.concat(flatten(item))
        } else {
            result.push(item)
        }
    }
    return result
}

console.log(flatten([1, 23, [4, 5, [6, 7]]]))
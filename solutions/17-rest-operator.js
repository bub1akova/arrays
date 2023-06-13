// BEGIN
export const getMax = (arr) => {
    let max = null
    arr.forEach(el => {
        if (el > max) {
          max = el
        }
    })
    return max
}

// END
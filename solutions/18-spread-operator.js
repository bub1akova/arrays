// BEGIN
export const flatten = (arr) => {
    let newArr = []
    arr.forEach(el => {
    if(el instanceof Array) {
        newArr.push(...el)
    } else {
         newArr.push(el)
    }
    });
    return newArr;
}

// END
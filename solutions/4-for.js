// BEGIN
const addPrefix = (arr, stringPrefix) => {
    const res = []
    for(let i = 0; i < arr.length; i++){
        res.push(`${stringPrefix}${' '}${arr[i]}`)
    }
    return res
}
export default addPrefix
// END
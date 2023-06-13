// BEGIN
const calculateAverage = (arr) => {
    if(arr.length === 0) {
        return null
    }
    let sum = 0
    for(const el of arr) {
        sum += el
    }
    return sum / arr.length
}
export default calculateAverage
// END
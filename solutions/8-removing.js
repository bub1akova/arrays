// BEGIN
const getSameParity = (arr) => {
    const newArr = []
    arr.forEach(el => {
        if(Math.abs(el % 2) === Math.abs(arr[0] % 2)){
            newArr.push(el)
        }
    })
    if(arr.length === 0){
        return []
    }
    return newArr
}
export default getSameParity
// END
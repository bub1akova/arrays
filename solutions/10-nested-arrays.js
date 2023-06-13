
// BEGIN
const getSuperSeriesWinner = (arr) =>{
    let canada = 0
    let ussr = 0
    arr.forEach(([el1, el2]) => {
        if(el1 > el2){
            canada++
        } else if(el1 < el2){
            ussr++
        }
    })
    if(canada > ussr){
        return 'canada'
    } else if(ussr > canada){
        return 'ussr'
    } else {
        return null
    }
}
export default getSuperSeriesWinner
// END
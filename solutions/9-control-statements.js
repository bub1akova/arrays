// BEGIN
const getTotalAmount = (arr, currency) => {
    let totalAmount = 0
    arr.forEach(el => {
        if(el.slice(0, 3) === currency){
            totalAmount += Number(el.slice(4))
        }
    })
    return totalAmount
}
export default getTotalAmount
// END
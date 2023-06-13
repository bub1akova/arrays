// BEGIN
export const calculateSum = (arr) => {
    let sum = 0
    arr.forEach((element) => {
        if(element % 3 === 0){
            sum += element
         }
    });
    return sum
}
// END
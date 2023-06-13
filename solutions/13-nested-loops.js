const _ = require("lodash"); 

// BEGIN
const getSameCount = (arr1, arr2) => {
    const uniqueArr1 = []
    const uniqueArr2 = []
    arr1.forEach(el => {
        if(arr2.indexOf(el) !== -1 && uniqueArr1.indexOf(el) === -1){
            return uniqueArr1.push(el)
        }
    });
    arr2.forEach(el => {
        if(arr1.indexOf(el) !== -1 && uniqueArr2.indexOf(el) === -1){
            return uniqueArr2.push(el)
        }
    });
    return new Set([...uniqueArr1].filter(el => uniqueArr2.includes(el))).size;
}
export default getSameCount
// END
// BEGIN (write your solution here)
export const getWeekends = (format) => {
    const arr = ['saturday', 'sunday']
    const arr1 = ['sat', 'sun']
    if(format == 'short'){
        return arr1
    } else {
        return arr
    }
}
// END


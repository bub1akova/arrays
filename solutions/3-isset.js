// BEGIN
export const get = (arr, index, param = null) => {
    return index >= 0 && index < arr.length ? arr[index] : param
}
// END
// BEGIN
const buildDefinitionList = (arr) => {
    if (arr.length == 0 || arr[0].length == 0) {
        return ''
    }
    let str = '<dl>'
    arr.forEach(el => {
        str += `${'<dt>'}${el[0]}${'</dt><dd>'}${el[1]}${'</dd>'}`
    });
    str += '</dl>'
    return str 
}
export default buildDefinitionList
// END
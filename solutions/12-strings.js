// BEGIN
import _ from 'lodash';
const makeCensored = (text, arrWords) => {
    const words = text.split(' ')
    const censoredWords = arrWords.map(() => '$#%!')
    let result = ''
    words.forEach((el) => {
        const processedWord = _.includes(arrWords, el) ? censoredWords[arrWords.indexOf(el)] : el
        result = result === '' ? processedWord : `${result}${' '}${processedWord}`
    })
  return result
}
export default makeCensored
// END
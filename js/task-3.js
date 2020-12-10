// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку(в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.

const findLongestWord = function (string) {
 
  let stringSplit = string.split(" ");
  let longestWord = 0;
  let word = "";

  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > longestWord) {
      longestWord = stringSplit[i].length;
      word = stringSplit[i];
    }
  }
  return word;
}
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
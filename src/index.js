const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
}

function decode(expr) {
  let splitWords = expr.split("*".repeat(10))
  console.log(splitWords)
  return splitWords
    .map((word) => {
      let letters = splitLetters(word, 10).map((letter) => {
        // далее декодим каждый символ, предварительно разбив на группы по 2 символа
        let trimmed = splitLetters(String(Number(letter)), 2)
          .map((code) => {
            return code == 11 ? "-" : "."
          })
          .join("")
        return MORSE_TABLE[trimmed]
        //   console.log(trimmed)
      })
      //   console.log(letters)
      return letters.join("")
    })
    .join(" ")
}
// console.log(
//   decode(
//     "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
//   )
// )

function splitLetters(word, size) {
  const pattern = new RegExp(`.{${size}}`, "g")
  let letters = word.match(pattern)
  //   console.dir(letters)
  return letters
}
module.exports = {
  decode,
}

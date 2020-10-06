const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  str = '';
  let arr = [];
  expr.match(/.{1,10}/g).forEach((el) => {
    str = '';
    el.match(/.{1,2}/g).forEach((subEl) => {
      if (subEl == 10) {
        str += '.';
      } else if (subEl == 11) {
        str += '-';
      }
    });
    arr.push(str);
  });
  let result = '';
  arr.forEach((el) => {
    if (el === '') {
      result += ' ';
    }
    for (let key in MORSE_TABLE) {
      key == el ? (result += MORSE_TABLE[key]) : '';
    }
  });

  return result;
}

module.exports = {
  decode,
};

import { isString } from './helpers.js';
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

export function vowels(str) {
    let a = 0;
    if (isString(str)){
      const split = str.split('');
      for (const letter of split)
        for (const vowel of VOWELS)
          if (letter == vowel){
            a = ++a;
          }

    }
    return a;
}
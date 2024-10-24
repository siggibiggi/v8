import { isString } from './helpers.js';

const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

export function consonants(str) {
    if (isString(str)){
      const split = str.split('');
      let a = 0;
      for (const letter of split)
        for (const consonant of CONSONANTS)
          if (letter == consonant){
            a = ++a;
          }
          return a;
    }

  }
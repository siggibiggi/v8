import { reverse } from './reverse.js';

export function palindrome(str) {
    const split = str;
    if (split == reverse(split) && split != ''){
      return true
    }
    return false
}
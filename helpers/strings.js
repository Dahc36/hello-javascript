// O(N)
const isPalindrome = function stringIsPalindrome(str) {
  let startIndex = 0;
  let endIndex = str.length - 1;

  while (startIndex < endIndex) {
    if (str.charAt(startIndex) !== str.charAt(endIndex)) {
      return false;
    }
    startIndex += 1;
    endIndex -= 1;
  }

  return true;
}
function checkPalindrome(inputString) {
    let l = 0; let r = inputString.length - 1;
    while (l < r) {
        if (inputString[l] != inputString[r]) {
            return false;
        }
        l++;
        r++;
    }
    return true;
}

console.log(checkPalindrome('asdfghjkllkjhgfdsa'));

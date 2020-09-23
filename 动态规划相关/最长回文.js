//1.最长回文子串
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n), () => new Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};


//2.最短回文串
//给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。
var shortestPalindrome = function (s) {
    if (s.length <= 1) return s
    let res = 0, l = s.length
    for (let i = l - 1; i > 0; i--) {
        let h = 0, f = i
        while (s[h] == s[f] && f >= h) {
            h++;
            f--
        }
        if (f + 1 - h + 1 <= 1) {
            res = i
            break;
        }
    }
    return s.substring(res + 1).split("").reverse().join("").concat(s)
};
function main() {
    let r = shortestPalindrome("abcd");
    console.log(r);
    console.log(shortestPalindrome("abcdba"));

}
main();
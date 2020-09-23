/**
 *  洗牌算法：
 *  1. 从第一张牌开始，将每张牌和随机的一张牌进行交换
 *  2. 更优解法：从第一张牌开始，将每张牌和之前全部牌中随机的一张进行交换
 *  3. C++ 标准库函数 std::random_shuffle (原理与第一点差不多)
 */

//inspired by http://www.cs.princeton.edu/~rs/
function shuffle(arr) {
  var len = arr.length, i;
  while (len) {
    i = Math.random() * len-- | 0; // 0 ≤ i < n
    arr[len] = [arr[i], arr[i] = arr[len]][0];
  }
  return arr;
}

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.array = nums
  this.origin = Object.assign([], nums)
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  let clone=this.origin.slice(0)
  return clone
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0, len = this.array.length; i < len; i++) {
    let random =  i+Math.floor(Math.random() * (len-i)) 
    this.array[i] = [this.array[random], this.array[random] = this.array[i]][0]
  }
  return this.array
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
let nums = [1, 2, 3, 4, 5, 6, 7]
var obj = new Solution(nums)
var param_1 = obj.reset()
var param_2 = obj.shuffle()
console.log(param_1.join(' '))
console.log(param_2.join(' '))
param_1 = obj.reset()
param_2 = obj.shuffle()
console.log(param_1.join(' '))
console.log(param_2.join(' '))
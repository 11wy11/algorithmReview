"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function curry(func) {
    // 存储已传入参数
    var _args = [];

    // 做一个闭包
    function _curry() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // 把参数合并
        _args = _args.concat(args);

        // 如果参数够了就执行
        if (_args.length >= func.length) {
            var result = func.apply(undefined, _toConsumableArray(_args));
            _args = [];
            return result;
        }
        // 继续返回此函数 
        else {
                return _curry;
            }
    }
    return _curry;
}
// 测试代码
function add1(a, b, c) {
    return a + b + c;
}
var testAdd = curry(add1);
console.log(testAdd(1)(2)(3));
console.log(testAdd(1, 2)(3));
console.log(testAdd(1)(2, 3));

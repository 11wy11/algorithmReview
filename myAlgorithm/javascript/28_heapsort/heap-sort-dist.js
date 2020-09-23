"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 堆排序
 *
 * Author: nameczz
 */

// 忽视数组的第一位
var HeapSort = function () {
    function HeapSort(originArray) {
        _classCallCheck(this, HeapSort);

        this.originArray = originArray;
        console.log(this.originArray);
    }

    _createClass(HeapSort, [{
        key: "buildHeap",
        value: function buildHeap() {
            var arr = this.originArray;
            var startIndex = Math.floor(arr.length);
            for (var _i = startIndex; _i >= 1; _i--) {
                this.heapify(arr, arr.length, _i);
            }
            return arr;
        }
    }, {
        key: "heapify",
        value: function heapify(arr, len, i) {
            while (true) {
                var maxPos = i;
                // 如果index i拥有叶左节点 并且左节点较大
                if (i * 2 <= len && arr[i] < arr[i * 2]) {
                    maxPos = i * 2;
                }
                // 如果index i拥有叶右节点 与Max节点比较大小，选出父/左/右中最大的一个
                if (i * 2 + 1 <= len && arr[maxPos] < arr[i * 2 + 1]) {
                    maxPos = i * 2 + 1;
                }
                if (maxPos === i) break; // 循环直到i节点为最大值
                this.swap(arr, i, maxPos); // 交换位置, 父节点为父/左/右中最大的一个
                i = maxPos; // i为左/右节点，并尝试向下查找更大的值
            }
        }
    }, {
        key: "sort",
        value: function sort() {
            var arr = this.buildHeap(); // 先建堆
            var len = arr.length - 1;
            while (len > 1) {
                this.swap(arr, 1, len); // 交换顶元素和最后一位。顶元素永远是最大的。
                len--;
                this.heapify(arr, len, 1); //剩下的元素重新建堆 直到len === 1 停止
            }
            console.log(arr);
        }
    }, {
        key: "swap",
        value: function swap(arr, i, max) {
            var temp = arr[i];
            arr[i] = arr[max];
            arr[max] = temp;
        }
    }]);

    return HeapSort;
}();

var arr = [null];
var i = 0;
while (i <= 10) {
    var num = Math.floor(Math.random() * 100);
    arr.push(num);
    i++;
}
var testHeap = new HeapSort(arr);
testHeap.sort();

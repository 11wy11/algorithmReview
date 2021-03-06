//递归版
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
function flatter(arr){
    var newArray=[]
    if(arr.length<1){
        return newArray;
    }else{
        _flatter(newArray,arr);
    }
    return newArray;
    function _flatter(result,arr){
        for(let item of arr){
            if(Array.isArray(item)){
                 _flatter(result,item)
            }else{
                result.push(item)
            }
        }
    }
}
//高级版
function flatter1(arr) {
    while (arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr)
    }
    return arr
  }

  //迭代版
  function flatter2(arr) {
    let arrs =[...arr]
    let newArr = [];
    while (arrs.length) {
        let item = arrs.shift()
        if(Array.isArray(item)){
            arrs.unshift(...item)   
        }else {
            newArr.push(item)
        }
    }
    return newArr
}

console.log("origin "+arr.join(","))
let res=flatter(arr);
console.log("method0 "+res.join(","))

let res1=flatter1(arr);
console.log("method1 "+res1.join(","))

let res2=flatter2(arr);
console.log("method2 "+res2.join(","))
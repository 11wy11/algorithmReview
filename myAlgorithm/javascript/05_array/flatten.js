/**
 * 数组扁平化
 * @param {原始数组} arr 
 */
// 递归
function flatten(arr){
   let res = [];
   arr.map(item=>{
       if(Array.isArray(item)){
          res=[...res,...flatten(item)];
       }else{
        res.push(item);
       }
      
   })
   return res;
}
// 迭代
function flatten1(arr) {
    let arrs = [...arr];
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

// 迭代版本
function flatten2(arr){
    let res =[];
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
      }
    return arr;
}

// test
const a=[1,2,3,[4,[5,[6,7]]],[8,9]];
console.log(0,a);

console.log(1,flatten(a));
console.log(2,flatten1(a));
console.log(3,flatten2(a));

/**
 * 根据参数决定展开深度，默认全部展开
 */
function flattenWithDeep(arr,deep=Infinity){
    let _arr=[...arr];
    let res =[];
    for(let i = 0;i<_arr.length;i++){
        let item=_arr[i];
        if(Array.isArray(item)&&deep>0){
           res=[...res,...flattenWithDeep(item,deep-1)];
        }else{
           res.push(item);
        }
    }
    return res;
}
console.log(4,flattenWithDeep(a));
console.log(5,flattenWithDeep(a,1));
a.copyWithin
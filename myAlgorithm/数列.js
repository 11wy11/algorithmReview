function getSum(n){
    let array=[];
    let j=0;
    let i=0;
    let curUpDays=1;
    let sum=0;
    while(j<n){
        if(i<=curUpDays){
          //array.push(1);
          sum+=1
          i++;
        }else{
            i=1;
           // array.push(-1);
           sum-=1;
            curUpDays++;
        }
       j++;
    }
    return sum;
}


//翻转数组，判断给定的数组是否存在一个片段翻转后数组变成升序
function canReverseOrder(arr){
   let targetI=-1;
   let targetJ=-1;
   let pre=arr[0];
   for(let i=1;i<arr.length;i++){
       if(targetI==-1&&arr[i]<pre){
           targetI=i-1;
       }else if(targetI!=-1){
            if(arr[i]>pre){
                 targetJ=i-1;
                 break;
            }
       }
       pre=arr[i];
   }
   if(targetJ==-1){
       return true;
   }else{
       if(targetI>0&&arr[targetJ]<arr[targetI-1]){
           return false;
       }
       if(targetJ<arr.length-1&&arr[targetI]>arr[targetJ+1]){
           return false;
       }
       //后面的序列也不是有序
       let pre;
       for(let j=targetJ+2;j<arr.length;j++){
            if(j==targetI+2){
                pre=arr[targetJ+1];
            }
            if(arr[j]<pre){
                return false;
            } 
            pre=arr[j];
       }
   }
   return true;
}

//百度乘法表
//二分查找法
function muliFind(n,m,k){
    var left = 0, right = m * n, mid;
    var sum;
    
    while(left <= right){
      sum = 0;
      mid = Math.floor((left + right) / 2);
      for(var i = 1; i <= m; i++){
        sum += mid >= n * i ? n : Math.floor(mid / i);
      }
      //console.log(sum)
      if(sum < k){
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
}

var uniqueFor = function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var item = arr[i];
        for(var j = i+1; j < arr.length; j++ ) {
            item === arr[j] && (arr.splice(j, 1), j--);
        }
    };
    return arr;
};

/**
 * 数组去重
 * @param {*} arr 
 */
//判断对象属性

var uniqueObject = function(arr) {
    var v, r = [], o = {};
    for(var i = 0; (v = arr[i]) !== undefined; i++) {
        !o[v] && (r.push(v), o[v] = true);
    }
    return r;
};


//数组过滤重复项filter

var uniqueFilter = function(arr) {
    return arr.filter(function(elem, pos, self) {
        // 如果没有重复项，返回true
        return self.indexOf(elem, pos + 1) === -1;
    });
};


for (var i = 0; i < 5; i++) {
    (function(i) {
       setTimeout(function timer() {
          console.log(i)
       }, i * 100)
    })(i)
 }
function main(){
// let array=[]
// for(let i=1;i<=10;i++){
//     array.push(i);
// }
// array.forEach(item=>{
//     console.log(getSum(item))
// })
let arr=[2,1,3,4]
//console.log(canReverseOrder1(arr));
console.log(muliFind(40,50,1034));
}
main();

function maxResult(arr) {
    arr.sort(function (a, b) {
        return b - a
    })
    let result = arr[0] + arr[1] + arr[2];
    return result;
}

function longestSub(arr) {
    var len = arr.length;
    var maxLength=0;
    if (len < 2) {
        return len;
    } else {
        var pre=arr[0]
        var count=1;
        for (var i =1; i < len; i++) {
            if(arr[i]<pre){
                if(count>maxLength){
                    maxLength=count
                }
               count=1; 
            }else{
                count++;
            
            }
            pre=arr[i];
        }
        if(count>maxLength){
            maxLength=count
        }
    }
    return maxLength;
}

function getLongStr(str){
    let len=str.length;
    if(len<2){
        return len;
    }
    let pre=str[0];
    let count=0;
    if(pre<=str[1]){
        return 1+getLongStr(str.substring(1));
    }else{
        return getLongStr(str.substring(1));
    }
}
console.log(getLongStr('01100'))
let array="111".split("");
console.log(array);
let res=["1",0,0,0,"1"]
console.log(res.join(""));
let array1=[1,2,3]
let array2=[4,5,6]
let array3=array1.concat(array2);
let total;
total=array1.reduce(function(item1,item2){
    return item1+item2;
});
let target="14235";
for(var i=0;i<target.length;i++){
    let temp=target.substring(0,i)+(i<target.length-1?target.substring(i+1):"");
    console.log(temp);
}
console.log(temp)
console.log(total);




// var n=parseInt(readInt());
// var m= parseInt(readInt());
// var target=read_line();
// var j=0;
// while(j<m){
//     var order=read_line();
//     var opt=order.split(" ");
//     if(opt.length==1){
//        //q询问 
//         print(getLongStr(target));
//     }else{
//        //c 变换
//         var x=parseInt(opt[1]);
//         var y=parseInt(opt[2]);
//         var array=target.split("");
//        for(var i=x-1;i<y;i++){
//          if(parseInt(array[i])){
//              array[i]=0;
//          }else{
//              array[i]=1;
//          }
//        }
//         target=array.join("");
//     }
//     j++;
// }

// function getLongStr(str){
//     let len=str.length;
//     if(len<2){
//         return len;
//     }
//     let pre=parseInt(str[0]);
//     if(pre<=parseInt(str[1])){
//         return 1+getLongStr(str.substring(1));
//     }else{
//         return getLongStr(str.substring(1));
//     }
// }

//最长不下降子序列

//最长上升子序列
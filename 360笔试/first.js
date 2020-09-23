function calAvgMoney(arr) {
    let str = arr.join("")
    var times=1;
    for(var i = 0; i < arr.len;i++){
      if(arr[i]==2)
      {
          times=times*2
        }
    }
    console.log(times)
    if (times == 1) {
        return calEveryPro(str);
    }
    var possibleItem = new Array(Math.pow(2, per)).fill(arr)
    possibleItem[0][1] = 0;
    console.log(possibleItem.join(" "))
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
            for (var j = 0; j < Math.pow(2, per); j++) {
                if(j%2==0){
                    possibleItem[j][i] = 0;
                }else{
                    possibleItem[j][i] = 1; 
                }
            }
        }
    }
    console.log(possibleItem.join(" "))
    let sum = 0
    possibleItem.forEach(function (item) {
        sum += calEveryPro(item.join(""))
    })
    return sum / (Math.pow(2, per));
}
function calEveryPro(str) {
    //均为0,1
    var result = 0
    let count = 1;
    for (var i = 0, len = str.length; i < len; i++) {
        if (str[i] === '0') {
            count = 1;
        } else {
            result += count;
            count++;
        }
    }
    return result;
}
console.log(calEveryPro("1101"))
console.log([1, 2, 0, 2, 1].filter(function (item) { return item == 2 }).join(" "))
console.log(calAvgMoney([1,2,1,2]))
//动态规划
var count=1;
function dpFind(dp,cur,n,count){
    if(n==1){
        return cur?cur:0;
    }
    if(cur==0){
        return dp[n-1]
    }else if(cur==1){
        return ((n-1)* dp[n-1]+count)/n
    }
    if(cur==2){
        return ( dp[n-1]+((n-1)* dp[n-1]+count)/n)/2
    }
}
function calGetMonty(arr,n) {
    var times=1;
    for(var i = 0; i < arr.len;i++){
      if(arr[i]==2)
      {
          times=times*2
        }
    }
    var dp=new Array(n).fill(0);
    var count=0;
    for(var i=0;i<n;i++){
        if(arr[i]==0){
            count=0; 
            dp[0]=0 
        }
        else if(arr[1]){
             count++;
             dp[0]=1
        }  
        if(i!=0){
            dp[i]=dpFind(dp,arr[i],i,count)
        }       
       
    }
    console.log(dp.join(" "))
    return dp[dp.length-1];
}
console.log(calGetMonty([1,2,1],4))
// //规范
// while(line=readline()){
//     var lines = line.split(" ");
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }
// // 本题为考试多行输入输出规范示例，无需提交，不计分。
// var n = parseInt(readline());
// var ans = 0;
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
//     for(var j = 0;j < lines.length; j++){
//         ans += parseInt(lines[j]);
//     }
// }
// print(ans);

function getMinK(arr,n){
    arr.sort(function(a,b){
        return a-b;
    });
    let k=0;
    while(arr[n-1]>=n){
        arr[n-1]-=n;
        for(let i=0;i<n-1;i++){
            arr[i]++;
        }
        arr.sort(function(a,b){
            return a-b;
        });
        k++;
    }
    return k;
}

function getMinK1(arr,n){
    arr.sort(function(a,b){
         return a-b;
     });
     let k=0;
     while(arr[n-1]>n){
         let temp=arr[n-1]-n;
         let needFind=true;
         for(let i=n-2;i>0;i--){
             //赋值的过程中排序
             if(needFind){
                if(temp>arr[i]){
                 arr[i+1]=temp;
                 arr[i]++;
                 needFind=false;
                }else{
                  arr[i+1]=arr[i]+1;
                }
             }else{
                arr[i]++;
             }
         }
          //折半查找插入
        // let low=0;
        // let high=n-1;
        // let m=Math.floor((high-low)/2);
        // let mid=arr[m];
        // while(low<=high){
        //     if(mid>temp){
        //         high=m-1;
        //     }else{
        //         low=m+1;
        //     }
        //     m=Math.floor((high-low)/2);
        //     mid=arr[m];
        // }
        // arr.splice(n-1,1);
        // arr.splice(low,0,temp);
         k++;
     }
     return k;
 }

console.log(getMinK([1,0,3],3));
console.log(getMinK1([1,0,3],3));
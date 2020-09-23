function getMinK1(arr,n){
    arr.sort(function(a,b){
         return a-b;
     });
     let k=0;
     while(arr[n-1]>=n){
         let temp=arr[n-1]-n;
         let needFind=true;
         for(let i=n-2;i>0;i--){
             //赋值的过程中排序
             if(needFind){
                if(temp>=arr[i]){
                 arr[i+1]=temp;
                 arr[i]++;
                 needFind=false;
                }else{
                  arr[i+1]=arr[i]+1;
                }
             }else{
                arr[i]=arr[i]+1;
             }
         }
         k++;
     }
     return k;
 }

console.log(getMinK1([1,2,5,7],4));
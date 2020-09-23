function binary(array,target){
    let left = 0,right=array.length-1;
    function _binary(array,left,right,target){
        let mid = Math.floor((left+right)/2);
        if(array[mid]==target){
            return mid;
        }
        else if(array[mid]<target){
            left=mid;
        }else{
            right=mid; 
        }
        return _binary(array,left,right,target);
    }
    return _binary(array,left,right,target);
}
// 两个数组合并去重

function merge(arr1,arr2){
    let map={};
    let result=[];
    for(let i=0;i<arr1.length;i++){
        if(!map[arr1[i]]){
            map[arr1[i]]=1;
            result.push(arr1[i]);
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!map[arr2[i]]){
            map[arr2[i]]=1;
            result.push(arr2[i]);
        }
    }
    return result;
}

//
new Promise((resolve)=>{
    console.log(1);
    setTimeout(()=>{console.log(2)},0);
    Promise.resolve().then(()=>{
    console.log(3);
    })
    resolve();
 }).then(()=>{console.log(4)});
 console.log(5);

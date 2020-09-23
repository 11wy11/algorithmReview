// 冒泡排序
function mp(array){
    let len=array.length;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(array[i]>array[j]){
                let temp=array[i]
                array[i]=array[j]
                array[j]=temp;
            }
        }
    }
    return array;
}
//桶排序
function tong(array,n){
    let count=[]
    for(let i=0;i<n;i++){
        count.push(0)
    }
    for(let i=0;i<n;i++){
        count[array[i]]++;
    }
    for(let i=0,j=0;i<n;i++){
        for(; count[i] > 0; (count[i])--)  
        array[j++] = i;
    }
    return array;
}

//梳排序
function shu(array){

}

//计数排序
// 性能优于比较排序，时间复杂度为O(n+K)，稳定排序
function countSort(array){
    let len=array.length;
    let max=Math.max(...array)
    let min =Math.min(...array);
    if (max == min) {
        return array;
    }
    
    let k=max-min+1;
    let c=new Array(k).fill(0);
    for(let i=0;i<len;i++){
        c[array[i]-min]+=1;
    }
    
    // 累计计数
    for(let j=1;j<k;j++){
        c[j]=c[j]+c[j-1];
    }
    let result=new Array(len).fill(0);
    for(let i = 0; i<len;i++){
        result[c[array[i]-min]-1]=array[i];
        c[array[i]-min]--;
    }
    return result;
}

// 堆排序
// 优点：性能较好，O(nlogn),时间复杂度比较稳定，辅助空间复杂度o1
// 缺点：数据变动时，堆维护成本高
// 适用于数据量大且数据呈现流式输入
function heapSort(array){
    //1.构建大顶堆
    for(let i=array.length/2-1;i>=0;i--){
        //从第一个非叶子结点从下至上，从右至左调整结构
        adjustHeap(array,i,array.length);
    }
    //2.将根与最后一个交换
    for(let j=array.length-1;j>=0;j--){
         swap(array,0,j);
         adjustHeap(array,0,j);
    }
    return array;
}
//调整大顶堆（仅是调整过程，建立在大顶堆已构建的基础上）
function adjustHeap(array,i,length){
    let temp=array[i]
    for(let k=2*i+1;k<length;k=2*k+1){
        //如果左子节点小于右子节点，k指向右
        if(k+1<length&&array[k]<array[k+1]){
            k++;
        }
        if(temp<array[k]){
            array[i]=array[k]
            i=k;
        }else{
            break;
        }

    }
    array[i]=temp;
    
}
//交换
function swap(array,i,j){
    let temp=array[i]
    array[i]=array[j]
    array[j]=temp;
}
//插入
function insertSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        arr.splice(i,1);
        let flag=false;
        for(let j=0;j<i;j++){
            if(temp<arr[j]){
                arr.splice(j,0,temp)
                flag=true
                break;
            }
        }
        if(!flag){
            arr.splice(i,0,temp)
        }
    }
    return arr;
}

//合并排序
function mergeSort(array){
     let len=array.length
     if(len<2){
         return;
     }
     let mid=len/2;
     let leftArray=array.slice(0,mid);
     let rightArray=array.slice(mid);
     mergeSort(leftArray)
     mergeSort(rightArray)
     merge(array,leftArray,rightArray)
     return array;
     
}
//合并两个有序排序
function merge(target,left,right){
    let ll=left.length
    let rl=right.length
    let i=0,j=0,k=0
    while(i<ll&&j<rl){
        if(left[i]<right[j]){
            target[k++]=left[i++]
        }else{
            target[k++]=right[j++]
        }
    }
    while(i<ll){
        target[k++]=left[i++]
    }
    while(j<rl){
        target[k++]=right[j++]
    }
}

//快速排序
// 优点：性能好，原地排序，空间复杂度优于归并排序，缺点：最坏n2，不稳定排序
// 快排的性能优化 双轴快排 2个基准数，Array.sort
function qSort(array,low,high){
    if(low>=high){
        return;
    }
    let i=low,key=array[low],j=high
    while(i < j){
        while(i<j&&array[j]>=key){
            j--;
        }
        //交换,找到右边第一个小于分界值的元素，交换
        array[i]=array[j]
        while(i<j&&array[i]<=key){
            i++;
        }
        //交换,找到左边第一个大于分界值的元素，交换
        array[j]=array[i]
    }
    array[i]=key
    qSort(array,low,i-1)
    qSort(array,i+1,high)
    return array

}
//选择排序
function selectSort(array){
    for(let i=0;i<array.length;i++){
        let min=array[i]
        let key=i;
        for(let j=i+1;j<array.length;j++){
            if(min>array[j]){
                min=array[j]
                 key=j;
            }
        }
        array[key]=array[i]
        array[i]=min;
       
    }
    return array;
}
//希尔排序
function shellSort(array)    
{    
    if(!array||array.length==0){
        console.log(1)
        return array;
    }
    let i, j, k, tmp;    
    let num=array.length
    console.log(num)
    for (i = num / 2; i > 0; i = i / 2)    
    {    
        for (j = i; j < num; j++)    
        {    
            for(k = j - i; k >= 0; k = k - i)    
            {    
                if(array[k+i] >= array[k])  {
                    break;    
                }                
                else    
                {    
                    tmp = array[k];    
                    array[k] = array[k+i];    
                    array[k+i] = tmp;    
                }    
            }    
        }    
    }  
    return array  
}

function print(array){
        console.log(array.join(","))
}
function main(){
    let array=[10, 9, 7, 101, 23, 44, 12, 78, 34, 23];
    let array1=[1,2,3,45,3,5,4,6,3,5];
    console.log("冒泡")
    print(mp(array.slice(0)));
    print(array);
    console.log("桶")
    print(tong([3,4,5,6,7,3,5,2],8));
    console.log("计数")
    print(countSort(array.slice(0)));
    print(countSort(array1.slice(0)));
    console.log("堆排序")   
    print(heapSort(array.slice(0)))
    console.log("插入排序")   
    print(insertSort(array.slice(0)))
    console.log("合并排序")   
    print(mergeSort(array.slice(0)))
    console.log("快速排序")   
    print(qSort(array.slice(0),0,array.length-1))
    console.log("选择排序")   
    print(selectSort(array.slice(0)))
    console.log("希尔排序")   
    print(shellSort(array.slice(0)))
}
main()
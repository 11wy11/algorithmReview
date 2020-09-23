/**
 *几种排序算法
 *@TangGuichuan
 *
 */


/**
 * @选择排序  http://en.wikipedia.org/wiki/Selection_sort
 *
 * 原理：在未排序的序列中找到最大（小）的元素与第1个元素交换，
 * 在剩余元素中继续找最大（小）的元素与第2个元素交换，
 * 以此类推，直到排序完毕
 */

function selectionSort(arr){
   var 
      i = arr.length - 1,
      j,
      buffer,
      special; //最大或最小值的位置

    // 采用倒序，提高查找性能
    for (; i >= 0;  i--) {
      special = i;
      buffer = arr[i];

      for (j = i - 1; j >= 0; j--) {

        // 正序与倒序取决于这里的判断,max or min
        if(buffer < arr[j]){
          // 当前的最值位置
          special = j;
          buffer = arr[j];
        }
      }
      // 最值与当前位置的值交换位置
      arr[special] = [ arr[i], arr[i]=buffer ][0];
    }

    return arr;
}


/**
 *@冒泡排序  http://en.wikipedia.org/wiki/Bubble_sort
 *
 *原理：两两比较顺序,如果顺序错误则交换位置
 */

function bubbleSort(arr){
  var 
      i = arr.length - 1,
      j;

  for (; i >= 0; i--) {

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j+1]) {
        arr[j] = [ arr[j+1], arr[j+1]=arr[j] ][0];
      }
    }

  }

  return arr;
}


/**
 *@插入排序 http://en.wikipedia.org/wiki/Insertion_sort
 *
 *原理：1.从第二位（当前元素）开始从后向前查找
 *      2.若新元素（当前元素的前面）大于当前元素，将新元素移到下一位置
 *      3.重复2，直到在有序区找到大于或等于新元素的位置
 *      4.将当前元素插到上面找到的位置
 *      5.重复2~4
 */

function insertionSort(arr){
    var 
        len = arr.length,
        i = 1,
        j,
        buffer;

    for (; i < len; i++) {
        buffer = arr[i];

        //在当前元素从后向前遍历,
        //一旦找到比当前元素大的就进行“元素加位”
        for (j = i - 1; j >= 0 && arr[j] > buffer; j--) {
                arr[j+1] = arr[j];
        }
        //找到的位置替换为当前元素，比它大的在上面已经“加位”了
        arr[j+1] = buffer;
    }
    
    return arr;
}

/**
 * @二分插入排序
 * 用二分法对插入排序进行优化
 *
 */

function binaryInsertSort(arr){
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i], left = 0, right = i - 1;
        while (left <= right) {
          var middle = parseInt((left + right) / 2);
          if (key < arr[middle]) {
            right = middle - 1;
          } else {
            left = middle + 1;
          }
        }
        for (var j = i - 1; j >= left; j--) {
          arr[j + 1] = arr[j];
        }
        arr[left] = key;
      }
    return arr;
   
}

/**
 * @归并排序
 * 
 */
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



//快速排序
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
        //交换,找到右边第一个小于分界值的元素，交换
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
    console.log("二分插入排序")   
    print(binaryInsertSort(array.slice(0)))
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

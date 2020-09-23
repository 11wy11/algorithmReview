/**
 * 不重复元素数组全排列
 */
function outputAllPossible(nums){
    let res=[];
    let backtrack = (tempNum,subNums)=>{
        if(subNums.length==0){
            return;
        }
        if(subNums.length==1){
            tempNum.push(subNums[0]);
            res.push(tempNum);
            return;
        }
        for(let i=0;i<subNums.length;i++){
            tempNum.push(subNums[i]);
            let subNums1=[...subNums];
            subNums1.splice(i,1);
            backtrack(tempNum.slice(),subNums1);
            tempNum.pop();
        }
    }
    backtrack([],nums);
    return res;
}

let res=outputAllPossible([1,2,3,4]);
console.log(res);

// 排序之后

/**
 * 深度优先DFS+回溯
 */
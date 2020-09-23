/**
 * 综合求和,[2,3,5,6,7] ,target=7; output:[[7],[2,2,3]]
 */
function combindationSum(candidates,target){
    let result=[];
    let n=candidates.length;
    let backtrack=(tempPath,target,start)=>{
        if(target<0) {
            return;
        }
        if(target==0){
           result.push(tempPath);
           return;
        }
        for(let i = start;i<n;i++){
            tempPath.push(candidates[i]);
            backtrack(tempPath.slice(),target-candidates[i],i);
            tempPath.pop();
        }
        return -1;
    }
    backtrack([],target,0);
    return result;
}
let result=combindationSum([2,3,5,6,7],7);
console.log(result);

result=combindationSum([1,3,5,6,8],8);
console.log(result);

/**
 * 回溯，剪枝，在排序后，在for循环中，如果target已经小于当前候选值，break，跳出循环
 */
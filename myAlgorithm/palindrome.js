//构造回文
function getPalindromeResult(inputArr){
    let result=[]
    inputArr.forEach(str=>{
        let reverseStr=str.split("").reverse().join("");
        let len=str.length
        var L=[];
        for(var k=0;k<len+1;k++){         
            L[k]=new Array();    
        }
        for (var i = 0; i < len + 1; i++) {
            L[i][0]=0;
            L[0][i]=0;
        }
        // 开始填表
         for (var i = 1; i < len + 1; i++) {
            for (var j = 1; j < len + 1; j++) {
                if (str.charAt(i-1) == reverseStr.charAt(j - 1)) {
                    L[i][j] = L[i - 1][j - 1] + 1;
                } else if (L[i - 1][j] >= L[i][j - 1]) {
                    L[i][j] = L[i - 1][j];
                } else
                    L[i][j] = L[i][j - 1];
            }
        }
        result.push(len-L[len][len]);
    })
    return result;
}
console.log(getPalindromeResult(["abcda"]))

function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(!pre||pre.length==0){
        return null;
    } else if(pre.length==1){
        return new TreeNode(pre[0]);
    }else{
        let tree =new TreeNode(pre[0]);
         let rootIndexInVin=vin.indexOf(pre[0]);
         tree.left=reConstructBinaryTree(pre.slice(1,rootIndexInVin+1),vin.slice(0,rootIndexInVin));
        tree.right=reConstructBinaryTree(pre.slice(rootIndexInVin+1),vin.slice(rootIndexInVin+1))
        return tree;
    }
}
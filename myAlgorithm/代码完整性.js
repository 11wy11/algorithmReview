 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(!pRoot2){
        return false;
    }
    console.log("enter")
        //层次遍历
    let treeList1=[]
    let array1=[]
    array1.push(pRoot1)
    while(array1.length>0){
        let p1=array1.shift();
        treeList1.push(p1.val)
        if(p1.left){
            array1.push(p1.left); 
        }
        if(p1.right){
            array1.push(p1.right);
        }
    }
     console.log(treeList1.join(","))
    let treeList2=[]
    let array2=[]
    array2.push(pRoot2)
    while(array2.length>0){
        let p2=array2.shift()
        treeList2.push(p2.val)
        if(p2.left){
            array2.push(p2.left); 
        }
        if(p2.right){
            array2.push(p2.right);
        }
    }
    console.log(treeList2.join(","))
    let targetIndex=treeList1.indexOf(treeList2[0]);
    if(targetIndex==-1){
        return false;
    }else{
        for(let i=1;i<treeList2.length;i++){
           if(treeList2[i]!=treeList1[targetIndex+i]){
               return false;
           }
        }
        return true;
    }
}
function main(){
    
   console.log(HasSubtree(generateTreeNode([1,2,3,4,5,6,7]),generateTreeNode([1,null,3,6])))
}
function generateTreeNode(array){
    let root=new TreeNode(array.shift())
    let qu=[root]
    while(array.length&&qu.length){
        let node=qu.shift();
        if(array.length){
            let leftNode=null
            let val=array.shift()
            if(val!=null){
                leftNode=new TreeNode(val)
                node.left=leftNode
                qu.push(leftNode);
            }                     
        }
        if(array.length){
            let rightNode=null
            let val=array.shift()
            if(val!=null){
                rightNode=new TreeNode(val)
                node.right=rightNode
                qu.push(rightNode);
            }    
            
        }
    }
    return root;
}

main()

function printMatrix(matrix)
{
    // write code here
    let result=[]
    if(!matrix.length||!matrix){
        return result
    }
    let row = matrix.size();
    let col = matrix[0].size();
    if(col==0){
        return result;
    }
    // 定义四个关键变量，表示左上和右下的打印范围
     let left = 0, top = 0, right = col - 1, bottom = row - 1;
     while (left <= right && top <= bottom)
        {
            // left to right
            for (let i = left; i <= right; ++i){
               result.push(matrix[top][i]); 
            }  
            // top to bottom
            for (let i = top + 1; i <= bottom; ++i){
              result.push(matrix[i][right]);  
            }  
            // right to left
            if (top != bottom){
                for (let i = right - 1; i >= left; --i){
                     result.push(matrix[i][bottom]);
                }             
            }
            // bottom to top
            if (left != right){
                for (let i = bottom - 1; i > top; --i){
                    result.push(matrix[left][i]);
                }  
             
            }
            left++,top++,right--,bottom--;
        }
    return result;
}
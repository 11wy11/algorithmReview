var group =[];
var curStr = '';
var result='';
var preStr='';
function unzipString(str){
    for(let i=0,len=str.length;i<len;i++){
        if(str[i]==='('){
            if(group.length==0){
               result+=curStr;
               curStr='';
            }
            group.push(str[i]);  
        }else if(str[i]===")"){
            
        }
    }
}
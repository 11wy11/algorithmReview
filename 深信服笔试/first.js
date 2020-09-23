var color = "#AA";
var reg=/^#([0-9]|[A-F]|[a-f]){6}$/;
var reg1=/^#([0-9]|[A-F]|[a-f]){3}$/;
if(reg.test(color)){
   var r=color.slice(1,3);
   var g=color.slice(3,5);
   var b=color.slice(5,7);
   print('rgb('+parseInt(r,16)+", "+parseInt(g,16)+", "+parseInt(b,16)+")");
}else if(reg1.test(color)){
   var r=color.slice(1,2);
   var g=color.slice(2,3);
   var b=color.slice(3,4);
   print('rgb('+parseInt(r+r,16)+", "+parseInt(g+g,16)+", "+parseInt(b+b,16)+")");
}else{
    print(color);
}
function print(s){
    console.log(s);
}

//
// var set =Array.from(new Set([11,11,1,2]));
// console.log(set);

// var line =readline();
// var path=line.split(',');
// var result=[];
// for(let i=0;i<path.length;i++){
//     var target=path[i];
//     for(let j=0;j<path.length;j++){
//         if(j!=i&& isSubPath(target,path[j])){
//             result.push(target);
//             break;
//         }
//     }
//  }
// // 去重
// var resultFinal=Array.from(new Set(result));
// if(resultFinal.length===0){
//     print("false");
// }else{
//     print(resultFinal.join(','));
// }
// function isSubPath(parent,sub){
//     var parentNode=parent.split('/');
//     var subNode=sub.split('/');
//     if(parentNode.length>subNode.length){
//         return false;
//     }
//     for(let i=0;i<parentNode.length;i++){
//        if(parentNode[i]!=subNode[i]){
//            return false;
//        }  
//     }
//     return true;
// }    


// three
var line="0,0,0,0;1,1,1,0;1,1,1,0";
var lines=line.split(";");
var origin=lines.map(item=>item.split(",")); 
console.log(origin);
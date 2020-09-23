var origin=[2,2,1,2,2];
var originE = [];
var originM = [];
var originH = [];
for(let i =0;i<5;i++){
    if(i<2 && origin[i]!=0){
        originE.push(origin[i]);
    }
    if(i>0&&i<4 && origin[i]!=0){
        originM.push(origin[i]);
    }
    if(i>=3&& origin[i]!=0){
        originH.push(origin[i]);
    }
}
if(originE.length==0||originM.length===0||originH===0){
    console.log(0); // 无法出题
    return;
}
let tempArray=[];
console.log(originE);
console.log(originM);
console.log(originH);
function Fibonacci(n)
{
    // write code here
    if(n<2){
        return 1;
    }else{
        let result=Fibonacci(n-1)+Fibonacci(n-2);
        return result;
    }
}
//console.log(Fibonacci(4))
function jumpFloor(number)
{
    // write code here
    if(number<3){
        return number;
    }else{
        let result=jumpFloor(number-1)+jumpFloor(number-2);
        return result;
    }
}
//console.log(jumpFloor(3))
function NumberOf1(n)
{
    // write code here
    if(n>=0){
       let arr=n.toString(2).split("");
        arr=arr.filter(item=>item>0)
        return arr.length
    }else{
        
    }
    
}
console.log(NumberOf1(3));

var N,M;
while((N=readInt())!=null &&(M=readInt())!=null){
      var array=[]
      var obj={}
      print(N)
      print(M)
       for(var i=0;i<N;i++){
            array.push(readInt());
            }            
         array.sort(function(a,b){return a-b});
              print(keys);
        for(var j=0;j<M;j++){
             var item=readline();
              if(obj.hasOwnProperty(item)){
                   obj[item]+=1;
             }else{
                    obj[item]=1;
             }
        }
        var min=0,max=0;
        var keys=Object.keys(obj);    
           
             var numArray=[];
       for(var key in keys){
             numArray.push(obj[key]);
             }
              numArray.sort((a,b)=>{return a-b});
             var num=keys.length;
        for(var k=0;k<num;k++){
             min+=numArray[k]*array[k];
             max+=numArray[k]*array[N-k];
             }
         print([min,max].join(" "))
}

var N,M;
while((N=readInt())!=null &&(M=readInt())!=null){
      var array=[]
      var obj={}
       for(var i=0;i<N;i++){
            array.push(readInt());
            }       
                   print( array)
         array.sort(function(a,b){return a-b});
                   print( array)
        for(var j=0;j<M;j++){
             var item=readline();
                print(item)
              if(obj.hasOwnProperty(item)){
                   obj[item]+=1;
             }else{
                    obj[item]=1;
             }
                    print(obj);
        }
        var min=0;
        var max=0;
        var keys=Object.keys(obj); 
                print(obj);
         print(keys)  
             var numArray=[];
       for(var key in keys){
             numArray.push(obj[key]);
             }
              numArray.sort((a,b)=>{return a-b});
             var num=keys.length;
        for(var k=0;k<num;k++){
             min+=numArray[k]*array[k];
             max+=numArray[k]*array[N-k];
             }
         print(min+" "+max)
}
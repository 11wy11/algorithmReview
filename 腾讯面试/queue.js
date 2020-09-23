function stack_pop(){
    return queue_pop();
}
function stack_top(){
    return queue_top()
}
function stack_push(item){
    let array=[]
    while (queue_top()){
        array.push(queue_pop());
    }
    queue_push(item);
    array.forEach(iter=>{
        queue_push(iter)
    })
    return item;
}

var queue=[]
function queue_pop(){
    return queue.shift()
}
function queue_push(item){
    queue.push(item);
}
function queue_top(){
    if(queue.length){
        return queue[0];
    }else{
        //console.log("队为空");
        return null;
    }
    
}
 
stack_push(1);
stack_push(2);
stack_push(3);
console.log(queue.join(","));
console.log(stack_pop());
console.log(queue.join(","));
console.log(stack_top());
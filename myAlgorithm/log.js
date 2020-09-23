function log(obj,parent=[]){
    let keys=Object.keys(obj);
    if(keys.length==0){
        return;
    }
    let queue=[]
    keys.forEach(key=>{
        if(typeof obj[key]=='object'){
            let temp=Object.assign([],parent);
            temp.push(key);
            log(obj[key],temp);
        }else{
            if(parent.length==0){
                console.log(key +"=" +obj[key]);
            }else{
                let result=''
                result=parent.join('.')
                result+="."+key+"=" +obj[key];
                console.log(result);
            }
        }
    })
}

function main(){
    let obj={
        a:{
            b:'c',
            d:{
                e:'f'
            },
            f:{
                g:{
                    k:111
                }
            }
        },
        b:1223,
        d:11
    }
    log(obj);
    
}
main();
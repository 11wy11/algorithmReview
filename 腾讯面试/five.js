let array=[];
let n=6;
function solv(origin){
    for(var i = 0;i < n; i++){
        var lines = origin[i].split(" ");
        var op = lines[0];
        var value = lines.length>1?parseInt(lines[1]):'';
        switch(op){
            case 'push':
                array.push(value);
                break;
            case 'pop':
                var target = array.pop();
                // print(target);
                break;
            case 'getMin':
                print(Math.min(...array));
                break;
        }
    }
}

function print(str){
console.log(str);
}
solv(['push 3','push 2','push 1','getMin','pop','getMin']);
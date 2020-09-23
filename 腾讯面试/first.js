function limitStr(str, len) {
    let res = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let currentLen=charLen(str[i]);
        if (currentLen==2 && count >= len - 4) {
            // 判断后面是否大于三
            let others=strCount(str.substring(i, str.length));
            if (others>=4) {
                res += '...';
                break;               
            }
            count+=charLen(str[i]);
            res+=str[i];
        }else if(currentLen==1 && count>len-3){
                res+=str[i]+'...';
                break;
        }else{
            count+=charLen(str[i]);    
            res+=str[i]; 
        }   
    }
    return res;
}
function charLen(str){
    if ((str >= '0' && str<= '9') || (str>= 'a' && str <= 'z') || (str >= 'A' && str<= 'Z')) {
       return 1;
    } else {
        return 2;
    }
}
function strCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
       count+=charLen(str[i]);
    }
    return count;
}
console.log(limitStr('一二三四', 8));
console.log(strCount('一二三四'.substring(2,4)))
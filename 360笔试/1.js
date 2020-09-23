var n = parseInt(readInt());
var array = []
for(var i = 0; i < n;i++){
    array.push(parseInt(readInt()));
}

function calAvgMoney(arr) {
    if(arr.length==0){
        return 0;
    }
    var str = arr.join("")
    //var per = arr.filter(function (item) { return item == 2 }).length;
    var times=1;
    for(var i = 0; i < n;i++){
      if(arr[i]===2)times*=2;
    }
    if (times == 1) {
        return _calEveryPro(str);
    }
    //var possibleItem=new Array(Math.pow(2,per)).fill(str)
    var possibleItem = []
    for (var j = 0, len = times;j<len; j++) {
        possibleItem.push(Object.assign([],arr))
    }
    for (var i = 0; i < n; i++) {
        if (arr[i] == 2) {
            for (var j = 0; j < times - 1; j += 2) {
                possibleItem[j][i] = 0
                possibleItem[j + 1][i] = 1
            }
        }
    }
    var sum = 0
    possibleItem.forEach(function (item) {
        sum += _calEveryPro(item.join(""))
    })
    return sum / times;
    function _calEveryPro(str) {
        //均为0,1
        var result = 0
        var count = 1;
        for (var i = 0, len = str.length; i < len; i++) {
            if (str[i] === '0') {
                count = 1;
            } else {
                result += count;
                count++;
            }
        }
        return result;
    }
}

print(calAvgMoney(array))
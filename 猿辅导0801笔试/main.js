
function getCommonTime(c1, c2) {
    if (c1[0] < c2[0] && c1[1] < c2[0]) {
        return false;
    }
    if (c1[0] > c2[1] && c1[1] > c2[1]) {
        return false;
    }
    return Math.max(c1[0], c2[0]) + '-' + Math.min(c1[1], c2[1]);
}
function solv(classTime){
    var map = {};
    var n = classTime.length;
    for (let i = 0; i < n; i++) {
        var pre = classTime[i];
        for (let j = i; j < n; j++) {
            var cur = classTime[j];
            var common = getCommonTime(pre, cur);
            if (common) {
                if (map.hasOwnProperty(common)) {
                    map[common]++;
                } else {
                    map[common] = 1;
                }
            }
        }
    }
    var max = 0;
    for(let obj in map){
        if(max<map[obj]){
            max=map[obj];
        }
    }
    return max;
}



var classTime = [[1, 4], [2, 3], [3, 4], [1, 2],[2,4]];
console.log(solv(classTime));
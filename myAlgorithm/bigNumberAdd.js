function bigNumberAdd(a,b){
  var c = '';
  var temp = 0;
  var aLength = a.length;
  var bLength = b.length;
  
  if (aLength > bLength) {
    b = addZero(b, aLength);
  } else {
    a = addZero(a, bLength);
  }
  var length = a.length;
 
  for (var i = length - 1; i >= 0; i--) {
    temp = parseInt(a[i]) + parseInt(b[i]) + parseInt(temp);
    if (10 <= temp) {
        c = (temp - 10) + c;
        temp = 1;
    } else {
        c = temp + c;
        temp = 0;
    }
  }
  if(temp===1){
    c = temp + c;
  }
  return c;
}

function addZero(str, length) {
  return new Array(length - str.length + 1).join("0") + str;             
}

console.log(bigNumberAdd("29","8"))


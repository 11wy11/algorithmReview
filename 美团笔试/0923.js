setTimeout(function () {
    console.log('setTimeout1');
    Promise.resolve().then(function () {
      console.log('promise1');
      Promise.resolve().then(function () {
        console.log('promise2')
    })
      return Promise.resolve().then(function () {
          console.log('promise2.1')
      })
    });
  });
  setTimeout(function () {
    console.log('setTimeout2');
  });

  var obj = {a: 'a'}
var num = 1;
var result = obj + num; //???
console.log(result);

var a = 'a';
var num = 1;
var re = a + num;
console.log(re);
// var name = "first";
// (function func(){
//     var name ="second";
//     console.log(this.name);
// })();
// console.log(this.name);
// console.log(window.name);
// console.log('code 1 finish');

// var source = "system source";
// var a ={
//     source:"new A",
//     func:function(){
//         console.log(this.source);
//     },
// };

// a.func();
// window.a.func();

// var func = a.func;
// func();
// func = window.a.func;
// func();

var foo = {n:1};
(function(foo){
    var foo;
    console.log(foo.n);
    foo.n = 3;
    var foo = {n:2};
    console.log(foo.n);
})(foo);

console.log(foo.n);

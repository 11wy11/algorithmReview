
   window.a=1;

   function foo1(){
   
   var b=2;
   
   console.log(b+this.a)
   
   }
   
   function foo(){
   
   var a=4;
   
   foo1();
   
   }
   
   foo();
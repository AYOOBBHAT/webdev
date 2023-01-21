var num1=document.getElementById('num1');
var num2=document.getElementById('num2');

var result=document.getElementById('result');
var form=document.getElementById('XiswhatperofY');


form.addEventListener('submit',function(event){
 

   if(!num1.value|| !num2.value){
alert("please enter values");

    }

    else{
var x=parseFloat(num1.value);
var y=parseFloat(num2.value);

var Finalresult=x/y;
var persent=Finalresult*100;

alert(persent);

result.innerText="answer"+persent+"%";
event.preventDefault();

    }


});



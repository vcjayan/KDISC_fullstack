function div()
{
var a=document.getElementById("Num1").value
var b=document.getElementById("Num2").value

var c=parseInt(a)/parseInt(b)
console.log(c)
document.getElementById("Result").innerHTML="<b>"+c+"<b>"



}
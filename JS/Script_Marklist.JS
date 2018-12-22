function Marklist()

{
    var a = document.getElementById("submark").value;
    var b = document.getElementById("subtotal").value;
    var c = (parseInt(a)/parseInt(b))*100;


if (c>=95) {
console.log("S")}
else if (c>=90 && c<95){
    console.log("A+")}
else if (c>=85 && c<90) {
    console.log("A")}
else if (c>=80 && c<85) {
    console.log("B+")}
else if (c>=75 && c<80) {
    console.log("B")}
else if (c>=70 && c<75) {
    console.log("C+")}
else if (c>=65 && c<70) {
    console.log("C")}
else if (c>=60 && c<65) {
    console.log("D+")}
else if (c>=55 && c<60) {
    console.log("D")}
else if (c>=50 && c<55) {
    console.log("E+")}
else if (c<50) {
    console.log("E")}

var name=document.getElementById("name").value;
var college=document.getElementById("college").value;
var candidatecode=document.getElementById("code").value;
var semester=document.getElementById("sem").value;
var subjectname=document.getElementById("subname").value;
var subjectmark=document.getElementById("submark").value;
var subjecttotal=document.getElementById("subtotal").value;

console.log(name);
console.log(college);
console.log(candidatecode);
console.log(semester);
console.log(subjectname);
console.log(subjectmark);
console.log(subjecttotal);
window.location="Marklist_Generate.HTML";
document.getElementById("name").innerHTML=name;






}


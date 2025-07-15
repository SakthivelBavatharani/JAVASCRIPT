//var name1="swathi";
//name2="bava";
//console.log(name2);

//console.log("priya" == "gomathi");
//console.log("50" == 50);
//console.log("50" === 50);
const prompt = require("prompt-sync")();
//const age = prompt("enter the age");
//const name = prompt("enter the name");
//console.log(age);
//console.log(name);
var mark=100;
var mark = prompt("enter the mark");
if(90<=mark){
console.log("Grade:","A");
}
else if(90>mark & mark>=75)
{
console.log("Grade:","B");
}
else if(mark<75 & mark>=35)
{
console.log("Grade:","C");
}
else(mark<35)
{
console.log("Fail");
}

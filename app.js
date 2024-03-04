// Chap 9-11
// USER INPUT & CONDITIONAL STATEMENT
// QS1 if one condition

// var x=prompt("Enter City");
// if (x==="Karachi"){
//     alert ("The City Of Lights") ;
// }
// else{
//     alert("Welcome to another City");
// }
  
// QS2 If more than one condition

// var x=prompt("Gender");
// if (x==="Male"){
//     alert ("Good Morning Sir") 
// }
// else if (x==="Female"){
//     alert ("Good Morning Maam") 
// }

// QS 3 if 3 conditions
// var x=prompt("Color of Road Signal")
// if (x==="Red"){
//     alert("Must Stop")
// }
// else if (x=="Yellow")
// {
//     alert("Ready to move")
// }
// else if (x=="Green")
// {
//     alert("Move now")
// }

// QS4 if less than or greater than condition
// var a=+prompt("Reamaining fuel in car in litres ");
// if (a <0.25)
//    {alert("Please refill the fuel in your car" )
// }
// else 
//    {alert("Dont need to refill the fuel" )
// }

// QS5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");}
// Answer: alert message is Displayed

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Answer: not displayed bcz it is post increment

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// answer:Condition 2 and 4 are true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");}
// answer:Displayed

// if (true){
//     alert("True");
//     }
//     if (false){
// //     alert("False");}
// Answer:True is displayed

// if("car" < "cat"){
//     alert("car is smaller than cat");}

// QS6

//  var Chemistry=+prompt("enter marks");
//  var urdu=+prompt("enter marks");
//  var Biology=+prompt("enter marks");
// var totalmarks=+prompt("enter total marks");

// var totalobtainedmarks=(Chemistry+urdu+Biology);
//  var percentage = (totalobtainedmarks /  totalmarks)* 100;
//  var grade, remarks;
//  if (percentage >= 80) {
//      grade = "A-one";
//      remarks = "Excellent";
//  } else if (percentage >= 70) {
//      grade = "A";
//      remarks = "Good";
//  } else if (percentage >= 60) {
//      grade = "B";
//      remarks = "you need to improve";
//  } else if (percentage < 60) {
//      grade = "Fail";
//      remarks = "Sorry";
//  } 
// document.write( "<h1>" +"MarksSheet" + "</h1>")
// document.write("total marks:" + totalmarks + "<br>")
// document.write("Marks obtained:" + totalobtainedmarks + "<br>")
// document.write("Percentage:" + percentage + "<br>")
// document.write("Grade"+ " "+ grade + "<br>"
// )
// document.write ( "Remarks:" + remarks  )

// Q7
// var y=+prompt("guess the secret number");

// if (y===2){
//         alert ("Bingo!Correct answer") 
//     }
//     else if (y===1){
//         alert ("Close enough to the correct answer") 
//     }
// Q8
// Taking input from the user
// var number = +prompt("Enter a number:");


// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }

// Q9
// var number = +prompt("Enter a number:");


// if (number % 2 === 0) {
//     alert(number + " is even number.");
// } else {
//    alert(number + " is  odd number.");
// }

// QS 10

// var temp=+prompt("temperature");
// if (temp>40) { 
//     alert("it is too hot outside")
// }
// else if (temp>30) { 
//     alert("The weather today is normal")
// }
//  else if (temp>20) { 
//     alert("Today's weather is cool")
// }
//   else if (temp>10) { 
//     alert("OMG!today's weather is so cool")
// }
  
// QS11

 
// var a =+prompt("enter first number")
// var b = +prompt("enter second number")

// var c = prompt("type + for addition , type - for subtraction, type * for multiplication , type / for division")

// if(c=="+")
// {
// console.log(a+b)
// }
// else if(c=="-")
// {
// console.log(a-b)
// }
// else if( c=="*")
// {
// console.log(a*b)
// }
// else if( c=="/")
// {
// console.log(a/b)
// }
// else if( c=="%")
// {
// console.log(a%b)
// }

// chap 12-13

// QS2
// var a= +prompt("Enter the first integer:");
// var b = +prompt("Enter the second integer:");

// if (a > b) {
//   console.log("The larger number is: " + a);
// } else if (b > a) {
//   console.log("The larger number is: " + b);
// } else {
//   console.log("Both numbers are equal.");
// }



// QS3
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
//  var number=+prompt("enter a number");
//  if (number>0){
//     alert("Positive")
//  }
//   else if (number<0){
//     alert("Negative")
//  }
//  else {
//     alert("Zero")
//  }
// // QS4
// Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
// var x=+prompt("Enter a character");
//  var vowel=("a,e,i,o,u")
//  var alpha=("b,c,d,f")

// if (vowel){
//     alert("true");
// }
// else  
//  {alert("false")}
   
// QS5
// var correctPassword=["abc123"];
// var a=prompt("Enter your password");
// if (!a){
//     alert("please enter your password");
// }
// else if (a==correctPassword){
//     alert("correct");
// }
// else{
//    alert("incorrect");
// }

// QS6

// var hour=+prompt("enter hours");

// if (hour < 18) {
// alert ("Good day");
// }
// else if (hour > 18) {
// alert ("Good evening");
// }
// QUESTIONS PDF 10-14
// 1
// var a=prompt("Enter city name")
// var city="karachi"
// if (city="karachi"){
//     console.log("the city of lights")
// }
// 2
// 3
// var a=+prompt("enter zipcode");

// if(a=="10010"){
//     alert("Karachi")
// }
// else{
// alert("please write correct city");
// }
// 4
// var x = 1; 

// if (x ===1) { 
//   x = 2; 
// }

// console.log("The new value of x is: " + x); 
// Chap 11
// 1
// var x=8;
// var y=2;
// if (x!==y){
    
// }
// 2
//  var x=8;
// var y=2;
// if (x>=y){
    
// }
// 3
// var x = 4; 

// if (x !== 9) { 
//   x = 9; 
// }

// console.log("The new value of x is: " + x); 
// 4
// var a= 4;
// var b = 8;

// if (a !== b) {
//   alert("Congratulations!");
// }
// 5
// var a=prompt("enter first name")

// if (a!=="aiman"){
//     alert("no match")
// }
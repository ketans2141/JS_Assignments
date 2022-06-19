// // 1. Using a loop print all odd numbers up to and including n. Don’t include 0. 

let n=(process.argv[2]);
for(let i=1;i<=n;i++){
    if(i%2!==0){
        console.log(i);
    }
   
}






// 2. Print the sum of all even numbers in a range from a to b. (Including a,b) 

let a=parseInt(process.argv[2]);
let b=parseInt(process.argv[3]);
let sum=0;
for(let i=a;i<=b;i++){
    if(i%2==0){
        sum=sum+i;
    }
    
}
console.log("sum of all even numbers in a range from a to b is "+sum);




//3. Write a program to read the first and last digit of a number 

let num= parseInt(process.argv[2]);
let first=num;
// let last=num%10;
while(first>=10){
    first=parseInt(first/10);
   
    // last=num/10;
    // num=Math.floor(num/10);
}
last=num%10
console.log(first + " " + last);





//4. Check whether the given number is an armstrong number or not. 

let number=parseInt(process.argv[2]);
let sum=0;
let temp=number;
while(temp>0){
    let digit=temp%10;
    sum=sum+digit**3;
    temp=Math.floor(temp/10);
}
if(sum==number){
    console.log("armstrong number");
}
else{
    console.log("not an armstrong number");
}





//5. Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range): 
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even 

let a=parseInt(process.argv[2]);
let b=parseInt(process.argv[3]);
let product=1;
for(let i=a;i<=b;i++){
    // let b=Math.floor(i%100/10);
    if(i%2==0  && parseInt(i/10)%10==4){
        a>=40;
        product=product*i;
    }
}
if(product<1680){
    console.log("condition is not satisfied");
}else{
    console.log(product);
}
// console.log("sum of all numbers between a and b that satisfy condition is "+product);



//6.  Take a number and return all the even digits of the number.

let num=parseInt(process.argv[2]);
let even=0;
while(num>0){
    let digit=num%10;
    if(digit%2==0){
        even=even*10+digit;
    }
    num=Math.floor(num/10);
}
console.log("even digits of the number are "+even);






//7. Check whether the given number is equal to its reverse number or not

let num=parseInt(process.argv[2]);
let reverse=0;
let temp=num;
while(temp>0){
    let digit=temp%10;
    reverse=reverse*10+digit;
    temp=Math.floor(temp/10);
}
if(num==reverse){
    console.log("number is equal to its reverse number");
}
else{
    console.log("number is not equal to its reverse number");
}



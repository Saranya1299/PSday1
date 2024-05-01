//Program1

let n = '12345'
let sum = 0
for(i=0;i<n.length;i++){
    if(i%2 > 0){
        continue
    }
    sum += Number(n[i])
}
console.log(sum);

//Program2

let n1 = '12345'
let sum1  = 0
for(i=0;i<n1.length;i++){
    if(i%2 == 0){
        continue
    }
    sum1 += Number(n1[i])
}
console.log(sum1);

//Program3
let n3 = '16534'
let even = 0
let odd = 0
let sum3 = 0
for(i=0;i<n3.length;i++){
    if(i%2 == 0){
        even += Number(n3[i])
    }
   else{
    odd += Number(n3[i])
   }  
}
sum3 = even - odd
console.log(sum3);

//Program4
let n4 = '9474'
let even1 = 0
let odd1 = 0
let sum4 = 0  
for(i=0;i<n4.length;i++){
    if(i%2 == 0){
        even1 += Number(n4[i])
    }
   else{
    odd1 += Number(n4[i])
   }  
}
if(even1>odd1){
    console.log("Even sum is bigger");
}
else{
    console.log("Odd sum is bigger");
}

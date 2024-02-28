// Arithmetic operators

// let a = 10;
// let b = 5;

// console.log("a =",a," b =",b)
// console.log("a + b =",a + b)
// console.log("a - b =",a - b)
// console.log("a * b =",a * b)
// console.log("a / b =",a / b)
// console.log("a % b =",a % b)
// console.log("a ** b =",a ** b)


// -----------------------------------------------------------------------------------------------------------------------


// let a = 20 
// let b = 10

// console.log("a =",a,"b =",b)
// console.log("++ a =",++a)  // ye he pri incriment isme pahle hi incriment ho jayega 
// console.log("a ++",a++) // ye he post incriment isme bad me incriment hoga . isko jab dusri bar call karayege tab iska out put dekhne ko milega 
// console.log(a)

// console.log("--a =",--a)
// console.log("a-- =",a--)
// console.log(a)


// ------------------------------------------------------------------------------------------------------------------------


// let num = prompt("Enter a number")

// if (num % 5===0){
//     console.log(num,"Number is multiple of 5")
// }else{
//     console.log(num,"Number is not multiple of 5")
// }


// --------------------------------------------------------------------------------------------------------------------------


let marks =prompt("Enter Your Marks")

let grade;

if(marks>=90 && marks<=100) {
    grade = "A"
}else if (marks>=80 && marks<=89){
    grade = "B"
}else if(marks>=70 && marks<=79){
    grade = "C"
}else if(marks>=60 && marks<=69){
    grade = "D"
}else if(marks>50 && marks<=59){
    grade = "E"
}else{
    grade = "F"
}

console.log("According to the marks your grade id ",grade)
// let hero = ["saktiman ", "Betmen","padmen","heromen"]

// for( let i = 0; i < hero.length ; i++){
//     console.log(hero[i])


// }

// -----------------------------------------------------------------------------------------------------------------------


// let cities = ["thara","ahmedabad","patan","Ranip","Gota"]

// for(let city of cities){
//     console.log(city.toLocaleUpperCase())
// }

// -----------------------------------------------------------------------------------------------------------------------------

// let stdmarks= [85,97,44,37,76,60]
// let sum = 0;

// for(let vat of stdmarks){
//     sum = sum + vat
// }

// console.log("avg marks of class is",sum/stdmarks.length)


// ----------------------------------------------------------------------------------------------------------------------------------

// let item = [250,645,300,900,50]

// // let idx = 0;

// for (let val of item){
//     console.log( `value of index ${idx} = ${val}`)
//     idx++
// }

// for (let i=0; i <item.length ;i++){
//     let offer = item[i]/10
//     item[i]-=offer
// }

// console.log(item)

// ----------------------------------------------------------------------------------------------------------------------------------

// let item = [250,645,300,900,50]

// let item2 =[11,55,44,1,1,545,651,66]

// let allItems = item.concat(item2)

// console.log(allItems)

// ------------------------------------------------------------------------------------------------------------------------------------------

// let item = [250,645,300,900,50]

// console.log(item)

// console.log(item.slice(2))

// -------------------------------------------------------------------------------------------------------------------------------------------

// let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

// // company.shift()
// // company.splice(2,1,"Ola")
// company.push("Amazon")
// console.log(company)


// let abc ={
//     a : {
//         b :{
//             c :{
//                 d : [
//                     {
//                         e :{
//                             f : 5
//                         }
//                     }
//                 ]
//             }
//         }
//     }
// }

// // console.log(abc.a.b.c.d[0].e.f)
// console.log(abc.a.b.c.d[0].e)



let btn = document.createElement("button");
btn.innerText = "Click Me";

btn.style.backgroundColor = "red";
btn.style.color="white";

document.querySelector("body").prepend(btn);
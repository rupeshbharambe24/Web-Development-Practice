let a = [1, 93, 5, 8, 88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// a.forEach((value, index, arr)=>{ //u can use this to print info for each element
//     console.log(value, index, arr)
// })  

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
//         // console.log(element)
//     }
// }

for (const i of a) {
    console.log( i )
}
let arr = [1, 13, 5, 6, 11]
// let newarr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newarr.push(element**2)

// } this is default method for doing this can be done with map like below

let newarr = arr.map((e, element, arr)=>{
    return e**2
})
console.log(newarr)
const greaterThanSeven = (e)=>{
    if (e > 7){
    return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]
const red = (a, b) => {
    return a+b
}
console.log(arr2.reduce(red))

// Array.from() is used to create a array from any other object 

console.log(Array.from("Rupesh"))
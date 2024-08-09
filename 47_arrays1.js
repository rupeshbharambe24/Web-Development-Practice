let arr = [1, 2, 4, 7, 9]
// an array is mutable
console.log(arr, typeof arr);
console.log(arr.length)
console.log(arr[2])
console.log(arr[4])

arr[3] = 66;
console.log(arr)

console.log(arr,toString()) //this give the array as a comma separated string
console.log(arr.join(" and "))

arr.pop() //this pops the last element of array out
arr.push("Rupesh") //this adds a element to last of array
arr.shift() //this pops the first element of array
arr.unshift("Jack") //this add a element to starting of the4 array

delete arr[4] //this deletes the element of which index number u give but the memory for that deleted element is till there and the element
//  for that index number is shown undefined
console.log(arr)

let a1 = [1, 2, 3]
let a2 = [5, 6, 8]
let a3 = [4, 9, 1]
console.log(a1.concat(a2, a3))

console.log(a3.sort())

num = [1, 2, 3, 4, 5, 6, 7, 8]
num.splice(2, 3, 22, 33)
console.log(num) //splice is used to remove the elements in array and we enter the first index values from which we want to delete
// after that we enter value of how many elements we want to delete from first index value we entered
// if we enter any element after this two then they get added t0 the array

num.slice(5) //slice slices array in parts, here it separates all elements after index 5
num.slice(1, 3) //here it separates elements from index 1 to 2

console.log(a2.reverse()) //this reverses the array



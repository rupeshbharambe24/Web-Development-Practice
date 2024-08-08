console.log("This is strings tutorial")
let a = "Rupesh";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

console.log(a.length)  //this give the length of the string

let real_name = "Rupesh"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`) //backtick is a template literal which make it easier to code
                                            //and u can also use single and double quotes inside it
let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) //this gives us characters from index 1 to 4
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77")) //here if there are 2 or more than 2 occurences than only the 1st gets replaced
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))
// name_.trim is used to remove whitespaces

//string is immutable means even if we make all this changes then still the original string remains the same as before 
//and u need to make a new string to save any changes to any string

//u can also used charAt(2) to find character in any string at given index number
// indexOf("sh") is to know the index number of given character 

console.log(b)
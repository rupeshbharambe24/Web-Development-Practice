console.log("Hey, this is loops here");

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);
    // this prints numbers from 1 to 100
}

let obj = {
    name : "Rupesh",
    role : "Student",
    field : "AI&DS"
}
/* for in loop is used for objects
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} */
for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
        // console.log(key)    
}

/* for of loop is used for array
for (const iterator of object) {
    
} */
for (const c of "Rupesh") {
    console.log(c)
}

let i = 0;
while (i < 6) {
    console.log(i)
    i++;
}

// do while loop is rarely used and mostly developers avoid it due to complications
// it is used when u want the code to run at least once before condition is checked
let b = 10;
do {
    console.log(b)
    i++;
} while (b < 6);

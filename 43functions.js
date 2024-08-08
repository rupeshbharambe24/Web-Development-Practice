function greeting(name) {
    console.log("Hey" + name + "how are you?")
    console.log("Hey" + name + ", you are good.")
    console.log("Hey" + name + ", your tshirt is good!")
}

greeting("Rupesh")

function sum(a, b, c = 4) { //here c is the default parameter
    // console.log(a + b)
    return a + b + c
}
result = sum(8) //if u don't fillout all parameter values than u get NaN meaning Not a Number
result2 = sum(10, 11)
result3 = sum(2, 4, 10)

console.log("The sum od a & b is:", result)
console.log("The sum od a & b is:", result2)
console.log("The sum od a & b is:", result3)

const func1 = (x) => {  //like this u can make fucntion varaible helps in passing it in another function
    console.log("I am an Arrow function", x)
}

func1(34);
func1(66);
//Array in Java. it hold data of same datatypes in one array. 
//Array in JS is special. it hold data of multiple datatypes in one array. Dynamic Size.

//4 method push(), pop(), shift(), unshift()
// push() - Add value at last
// pop() - Remove value at last
// shift() - Remove value at first
// unshift() - Add value at first


let arr = [, null, true, 123, 99.99, 'Loge'] //giving all data types including undefined also.
console.log(arr)
console.log(arr[1])
console.log(arr.length)


// unshift() - Add value at first
arr.unshift("Hello")
console.log(arr)

// shift() - Remove value at first
arr.shift()
console.log(arr)

// push() - Add value at last
arr.push("Kitty")
console.log(arr)

// pop() - Remove value at last
arr.pop()
console.log(arr)

//splice() - Replace array data with new one
let a = [1,2,'abc','xyz',,false]
console.log(a)

a.splice(0,2,100,200) //from a[0], 2 positions, replace with values 100,200
console.log(a)

a.splice(2,3,11,12,13) //from a[2], 3 positions, replace with values 11, 12, 13
console.log(a)

//includes() - to check data exists or not
if(a.includes(11)){
    console.log("Yes 11 is present")
}

//indexOf() - to check the index of a data in array
console.log(a.indexOf(12))

//join() - to join the array of data to a single string
let a_joined = a.join("")
console.log(a_joined)

//reverse() - to reverse the array data
console.log(a.reverse())

//sort() - to sort the array
console.log(a.sort())   //everything will be treated like string and sorted
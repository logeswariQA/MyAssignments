//_____________________CONCAT________________________________

let a = "Java"
let b = "Script"

console.log(a.concat(b)) 


//_______________________SUBSTRING______________________________


let c = "JavaScript"

console.log(c.substring(3,6))  //starts from c[3] to c[6]-1 . Strange. I didnt like this method. //Accept only postive index
console.log(c.substring(3))  //Prints from c[3] to last index.
console.log(c.substring(-3))  //Accept only postive numbers. Incase of negative number, it prints full index.

//_______________________SLICE______________________________

let d = "JavaScript"

console.log(d.slice(3.6))   //starts from c[3] to c[6]-1 . Strange. I didnt like this method. //Accepts both postive and negative index
console.log(d.slice(3))     //Prints from c[3] to last index.
console.log(d.slice(-3))     //Prints from c[3] to last index.
console.log(d.slice(-3,-6))  //returns empty as -3 > -6 // Example of negative index : // 0(a) 1(b) 2(c) 3(d) then, // -4(a) -3(b) -2(c) -1(d) 
console.log(d.slice(-6,-3))  // Example of negative index : // 0(a) 1(b) 2(c) 3(d) then, // -4(a) -3(b) -2(c) -1(d) 
 

//_______________________REPLACE______________________________

let e = "abcdab1234@test.com"

console.log(e.replace('ab','AB')) // replaces only the first occurence

//_______________________REPLACEALL______________________________

let f = "abcdab1234@test.com"

console.log(f.replaceAll('ab','AB'))    // replaces all the occurence


//_______________________REPLACEALL using special characters______________________________

let g = "abcd1234@test.com"
console.log(g.replaceAll(/[a-z]/g,'1'))    // replaces all the occurence //watchout for the syntax carefully
console.log(g.replaceAll(/[^a-z]/g,'1'))    // replaces all the occurence //watchout for the syntax carefully ^retains value

//_______________________EQUALITY TYPES______________________________

console.log(true==1) //loose equality. checks value. doesnt check datatype.
console.log(true===1)   //strict equality. checks value. check datatype.
console.log('Loge'==='LOGE')
console.log(5=='5')
console.log(5==='5')
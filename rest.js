const objectA = [1,2,3,4,5,6];
const {a,...rest} = objectA
console.log("rest",rest);
console.log("a",a);
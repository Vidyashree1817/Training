//Primitives
//number
let age: number = 22;

//string
let name: string = "vidya";
let greet: string = 'hello';
let sentence = `hello this is ${name}`;

//boolean
let isActive: boolean = true;

//bigint

let hugenum: bigint = 9007199254740993n
let hugeNumber = BigInt(9007199254740993);
console.log(hugenum);
console.log(hugeNumber);

//symbol
let s1: symbol = Symbol("id");
let s2: symbol = Symbol("id");

console.log(s1 === s2);//output is false

let s3 = Symbol("id");
let s4 = Symbol("id");

console.log(s3 === s4);//output is false

let id1: symbol = Symbol("id");
let id2: symbol = Symbol("id");

//
let user = {
    name: "Vidya",
    [id1]: 1
}
user[id2] = 100
console.log(user);//{ name: 'vidya', [Symbol(id)]: 100, [Symbol(id)]: 1 }

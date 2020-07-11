// export {};

let myString: string;
let myNum: number;
let myBool: boolean;
let myVal: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = 'abc';
myNum = 22;
myBool = true;
myVal = 5;

strArr = ['hello', 'world'];
numArr = [1, 2, 3];
boolArr = [true, false];

strNumTuple = ['Hello', 4];
// strNumTuple = ['Hello', 4, 3]; still works

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myUndefined);

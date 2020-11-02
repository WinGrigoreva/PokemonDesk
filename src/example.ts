//----------homework-2:-----------------------------------------------------
//homework-2.1:
const strConcatStr1 = (a: string, b: string):string => a+b;
strConcatStr1('Hello ', 'world');
//or
type typeFnConcatStr = (x:string, y:string) => string; 
const strConcatStr2: typeFnConcatStr = (x,y) => x+y;
strConcatStr2('Hello', 'world');
//homework-2.2:
type stringOrNumber  = string | number; 
interface IMyHometask {
    howIDoIt: string;
    simeArray: stringOrNumber[];
    withData?: IMyHometask[];
};
const MyHometask: IMyHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
//homework-2.3:
interface MyArray<T> {
    [n:number]: T;
    map<U>(fn: (el: T) => U): U[];
    reduce<X>(fn: (el1:X, el2:T) => X): X;
}
const tsArr1: MyArray<number> = [1,2,3,4];
const tsArr2: MyArray<string> = ['1','2','3','4'];
tsArr1.map((i:number)=>i+1);
tsArr1.map((i:number)=>`${i}+1`);
tsArr1.reduce((s:number, el:number)=> s+el);
tsArr2.reduce((s:string, el:string)=> s+el);
//----------простые типы:---------------------------------------------------
// let _name: string = '20';
// let age = 20;
// let str = 'Hello, ' + _name;
// console.log(_name + age);
// console.log(_name + age);
// console.log(+_name - age);

// let arrSum = (arr: number[]) => arr.reduce((a,b) => a+b);
// arrSum([1, 12]);

// type StrOrNum  = string | number;
// let x1: StrOrNum = 2021;
// let x2: StrOrNum = 'Hello! ';


//----------массивы:--------------------------------------------------------
// const InfinityArr: number[] = [1,2,3];
// const tsArr: Array<number> = [1,2,3];
// const endArr: [string, number] = ['2', 2];

//----------объекты:---------------------------------------------------------
// const user1: {name: string, age: number} = {
//     name: 'Anna',
//     age: 43,
// };

// type userType = {
//     name: string, 
//     age: number | string,
//     male?: string,
// }
// const user2: userType = {
//     name: 'Igor',
//     age: '33',
//     male: 'men',
// };

// interface intUser {
//     name: string;
//     age: number | string;
//     readonly male: string;
// };
// const user3: intUser = {
//     name: 'Anton',
//     age: 20,
//     male: 'men',
// };
// user3.name = 'Anrey';

// interface IndexInterface {
//     [n: string]: string;
// }
// const data: IndexInterface = {
//     item1: 'item1',
//     item2: 'item2',
// }
// const _item3 = data.item3;

//----------функции:--------------------------------------------------------
// function calc1 (operation: '+' | '-' | '*' | '/', a:number, b:number):number {
//     switch (operation) {
//         case '+': return a+b;
//         case '-': return a-b;
//         case '/': return a/b;
//         case '*': return a*b;
//     }
// };
// calc1('+', 1, 100);

// enum operationCalc {
//     add = '+',
//     div = '/',
//     sub = '-',
//     multi = '*',

// }
// function calc2 (operation: operationCalc, a:number, b:number):number {
//     switch (operation) {
//         case operationCalc.add: return a+b;
//         case operationCalc.sub: return a-b;
//         case operationCalc.div: return a/b;
//         case operationCalc.multi: return a*b;
//     }
// };
// calc2(operationCalc.add, 1, 100);

// type typeFn = (a:number|string, c:string) => void; 
// const myFunc: typeFn = (a=2, c='4') => a+c;
// myFunc('222', '33');
// myFunc(222, '33');

//----------Generics:-----------------------------------------------------
// interface MyArray<T> {
//     [n:number]: T;
//     map<U>(fn: (el: T) => U): U[];
// }
// const tsArr: Array<number> = [1,2,3,4];
// tsArr.map((i:number)=>i+1);
// tsArr.map((i:number)=>`${i}+1`);

// function getLen<T extends Array<any>>(arr: T): number {
//     return arr.length;
// }
// getLen([1,2,3,4]);
// function Identity<T>(value: T): T {
//     return value;
// }
// Identity(1);
// Identity('Moto Moto');
// Identity(true);

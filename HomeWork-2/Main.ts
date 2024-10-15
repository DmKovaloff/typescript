// let test1: number = 123;
// let test2: string = 'abc';
// console.log(test1 + test2);
//
// let test3: number = 123;
// let test4: string = 'abc';
// let test5: number;
//
// // test5 = test3 + test4;
//
// let test7: number = 123;
// let test8: number = 456;
//
// console.log(test7 + test8);
//
//
// let test9: number = +'123';
// let test10: number = +'456';
//
// console.log(test9 + test10);
//
// let test11: string = '1';
// test11 += 1;
//
// console.log(test11);
//
// let obj = {a: 1, b: 2, c: 3};
// let res:number = 0;
//
// for (let key in obj) {
//     let elem = obj[key];
//     res += elem;
// }
//
// console.log(res);
//
// function sum(arr:Array<number>):number {
//     let res: number = 0;
//
//     for (let num of arr) {
//         res += num;
//     }
//
//     return res;
// }
// let numArr:number[] = [1, 2, 5];
// console.log(sum(numArr));
//
// let msg: 'error' | 'warning' | 'success';
// msg = 'error';
// msg = 'warning';
// msg = 'success'

// enum Season {Winter, Spring, Summer, Autumn};
// let current: string = Season[0];
// console.log(current)  // 'Winter'
//
// let currentW: number = Season.Autumn;
// console.log(currentW); // 3
//
// enum Fruits { Apples, Bananas, Oranges, Grapes };
// let myFruit: string = Fruits[2];
// let myFruitG: number = Fruits.Grapes;
// console.log(myFruit); // Oranges
// console.log(typeof myFruit); //string
// console.log(myFruitG); // 3
// console.log(typeof myFruitG); // number
//
// let currentFruit: Fruits = Fruits.Apples;
// console.log(currentFruit); // 0
// console.log(typeof currentFruit); // number
//
// enum Week {Monday = 1, Tuesday = 2, Wednesday, Thusday = 4, Friday = 'holiday'};
// let weekNum: number = Week.Wednesday;
// console.log(weekNum); // 3
// let weekTime: string = Week.Friday;
// console.log(weekTime); // 'holiday'


// let date: Date = new Date(2030, 11, 31);
// console.log(date);
// // let date: Date = new Date(2030, 11, 31);


// Интерфейсы  / Массивы в объектах в TypeScript

// interface Country {
//     capital: string;
//     cities: string[];
// }
// let Ukraine: Country = {
//     capital: 'Kyiv',
//     cities: ['Donetsk', 'Kharkiv', 'Dnepr']
// }
// console.log(Ukraine);

// interface User {
//     name: string,
//     position: {
//         name:string,
//         salary:number
//     },
//     salaryday: string,
//     car?: string
//     addres: Addres;
// }
//
// interface Addres {
//     country: string;
//     city: string;
// }
//
// let addres: Addres = {country: 'Ukraine', city: 'Kyiv'}
//
// let employee: User = {
//     name: 'Andrew',
//     position: {
//         name: 'programmer',
//         salary: 1000,
//     },
//     salaryday: '2025-11-01',
//     addres: addres
// };

// interface User {
//     name: string,
//     age: number
// }
// let arr: User[] = [];
// arr.push({name: 'john', age: 30});
// arr.push({name: 'eric', age: 40});
// console.log(arr);

// type Func = (x:number, y:number) => number;
//
// let func1: Func = function (a:number, b:number): number {
//     return a + b;
// }

// type Func = (x: number, y: number, z: number) => number;
// let func1: Func = function (x: number, y: number, z: number): number {
//     return x+y+z;
// }
//
// console.log(func1(1,2,3));

// type Func = (x:number, y:number[]) => number[];
//
// let func1:Func = function (num:number, arr:number[]): number[] {
//
//   return  arr.push(num);
//
// }
//
// console.log(func1(1, [1, 2, 3]));

// let func: (x: number, y: number) => number = function(a: number, b: number): number {
//     return a + b;
// };
//
// let func1: (x:number, y:number[]) => number[] = function (num:number, arr:number[]): number[] {
//     arr.push(num)
//     console.log(arr);
// }


// Функции-коллбэки в TypeScript

// type Func = (num: number) => number;
//
// function make(arr: number[], func: Func): number[] {
//     return arr.map(function(elem: number) {
//         return func(elem);
//     });
// }
//
// let res: number[] = make([1, 2, 3], function(num: number): number {
//     return num ** 2;
// });
//
// console.log(res);

// Найдите и исправьте ошибки, допущенные в следующем коде:

type Func = (num: number) => number;

function make(arr: number[], func: Func): number {
    let sum:number = 0;

    for (let elem of arr) {
        sum += func(elem);
    }
    return sum;
}

let res: number = make([1, 2, 3], function(num:number) : number  {
    return num ** 2;
});

console.log(res);
// terminal:
// cd homework/homework-1  - перейти в директорию
// dir - проверить список файлов в текущей директории
// tsc main.ts - начало компиляции кода, создание JS файла
// node  main.js - запустит JS файл и покажет в терминале результат
// tsc main.ts && node main.js - скомпилит js и сразу выведет его в терминале
// cd .. - выйти на одну директорию выше

// let num: number = 100;
// let str: string = 'hello';
// let bln: boolean = true;
// let obj: {id: number, status: boolean; name?: string;} = {id: 1, status:true, name:'Valera'}
// // name?: string; - "?" необязательный параметр
// let arrS: string[] = ['hello', 'okten', 'world'];
// let arrN: number[] = [1, 2, 3];
// let arrN2: Array<number> = [1, 2, 3];
// let arrObj: {name:string, age:number} [] = [
//     {
//         name: 'Pasha',
//         age: 33
//     },
//     {
//         name: 'Valera',
//         age: 33
//     },
//     {
//         name: 'Misha',
//         age: 33
//     }];
//
// function foo (obj:{id: number, name: string;}): void{
// }
// // если функция ничего не возвращает, то ставим void
//
//
// // HTMLDivElement - эдемент типизации
// function divCreator(content: string, domElementWhereToadd:HTMLElement) {
//     let div:HTMLDivElement = document.createElement('div');
// }
//
// divCreator('hello', document.body);
//
// function fetchData():Promise<{id:number, userId:number, title:string, body:string}[]>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(value => value.json())
//         .then((value:{id:number, userId:number, title:string, body:string}[]) => {
//             return value;
//         })
// }
//
// // private, public, protected - модификаторы аргументов
//
//
// class User {
//     private _id: number;
//     name: string;
//     status: boolean;
//
//
//     constructor(id: number, name: string, status: boolean) {
//         this._id = id;
//         this.name = name;
//         this.status = status;
//     }
//
//     greeting(): void {
//         console.log('hello');
//     }
// }
// // // 1
// // let objT: User = {
// //     id: 1,
// //     name: 'Misha',
// //     status: true,
// //     greeting():void {
// //         console.log('alloha')
// //     }
// // }
//
// // // 2
// // let user = new User();
// // user.id = 2;
// // user.name = 'Valerchik'
// // user.status = true;
//
// // 3
// let user = new User(2, 'asd', true);
//
// class UserShortHandConstruction {
//     constructor(private id:number, public name:string, public status:boolean) {
//     }
// }
//
// let userShC = new UserShortHandConstruction(1,'Misha', true);
// console.log(userShC);
//
// class Customer extends UserShortHandConstruction{
//     constructor(id: number, name: string, status: boolean, public login: string, public password:string) {
//         super(id, name, status);
//     }
// }
//
// let customer = new Customer(2, 'Valera', true, 'login', 'pass');
// console.log(customer);
//
// function foobar(user:UserShortHandConstruction) {
//     if (user instanceof UserShortHandConstruction) {
//         console.log(user.name, user.status);
//     }
//     if (user instanceof Customer) {
//         let customer = user as Customer
//         console.log(customer.name, customer.status, customer.login, customer.password);
//     }
// }
//
// foobar(userShC);
// foobar(customer);


// // ENUM
//
// enum Gender{
//     MALE,
//     FEMALE,
// }
//
// class User {
//     name: string;
//     gender: Gender;
//
//     constructor(name: string, gender: Gender) {
//         this.name = name;
//         this.gender = gender;
//     }
// }
//
// let user = new User('Misha', Gender.MALE);
//
// if (user.gender === Gender.MALE) {
//     console.log('male');
// }

// GENERIC
class User <ID>{
//     constructor(private id: any, private name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
    constructor(private id: ID, private name: string) {
        this.id = id;
        this.name = name;
    }
}

let user1 = new User<number>(1, 'Misha')
let user2 = new User<string> ('34fdf54d', 'sjsjej')
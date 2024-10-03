// terminal:
// cd homework/homework-1  - перейти в директорию
// dir - проверить список файлов в текущей директории
// tsc main.ts - начало компиляции кода, создание JS файла
// node  main.js - запустит JS файл и покажет в терминале результат
// tsc main.ts && node main.js - скомпилит js и сразу выведет его в терминале
// cd .. - выйти на одну директорию выше
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var UserShortHandConstruction = /** @class */ (function () {
    function UserShortHandConstruction(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    return UserShortHandConstruction;
}());
var userShC = new UserShortHandConstruction(1, 'Misha', true);
console.log(userShC);
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name, status, login, password) {
        var _this = _super.call(this, id, name, status) || this;
        _this.login = login;
        _this.password = password;
        return _this;
    }
    return Customer;
}(UserShortHandConstruction));
var customer = new Customer(2, 'Valera', true, 'login', 'pass');
console.log(customer);
function foobar(user) {
    if (user instanceof UserShortHandConstruction) {
        console.log(user.name, user.status);
    }
    if (user instanceof Customer) {
        var customer_1 = user;
        console.log(customer_1.name, customer_1.status, customer_1.login, customer_1.password);
    }
}
foobar(userShC);
foobar(customer);

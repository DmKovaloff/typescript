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
function make(arr, func) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elem = arr_1[_i];
        sum += func(elem);
    }
    return sum;
}
var res = make([1, 2, 3], function (num) {
    return Math.pow(num, 2);
});
console.log(res);

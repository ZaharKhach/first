"use strict"

console.log(4 + '5');//45 и тип переменной string 
console.log(4 + +'5');//9 и типа переменной number

let i = 1;
let u = 1;
console.log(++i);// i = 2
console.log(u++);// u = 1
console.log(u);// u = 2

console.log(2 * 4 == 8);//true
console.log(2 * 4 == '8');//true
console.log(2 * 4 === '8');//false
console.log(2 * 4 === 8);//true 


const isClear = true;
const isSilence = false;//если тут будет тру тогда и в консоле тоже будет тру 
console.log(isClear && isSilence);//false 

const Vasya = true;
const Vitalik = false;
console.log(Vasya || Vitalik);//ture 
console.log(!Vasya || Vitalik);//false


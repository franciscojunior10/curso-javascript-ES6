//// ----Aula de Classes----
// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }
// console.log(Matematica.soma(2,7));
//// ----Aula const e let----
// const user = { nome: 'jr' };
// user.nome = 'll';
// console.log(user);
// function teste(x) {
//     let y = 2;
//     if(x > 5){
//         let y = 4;
//         console.log(x, y);
//     }
// }
// teste(10);
//// ----Aula de vetores----
// const arr = [1, 2, 3, 5, 76];
// const newArr = arr.map(function(item, index){
//     return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next){
//     return total + next;
// });
// console.log(sum)
// const filter = arr.filter(function(item){
//     return item % 2 == 0;
// });
// console.log(filter);
// const find = arr.find(function(item){
//     return item === 4;
// });
// console.log(find);
//// ----Aula de arrow function----
// const arr = [1, 2, 3, 5, 76];
// const newArr = arr.map(item => item + 1);
// console.log(newArr);
//// ----Aula de desestruturação----
// const user = {
//     nome: 'Jr',
//     idade: 23,
//     endereco: {
//         cidade: 'Picos',
//         estado: 'PI',
//     },
// };
// const { nome, idade, endereco: { cidade } } = user;
// function mostrarNome({ nome }){
//     console.log(nome);
// }
// mostrarNome(user);
//// ----Aula de rest/spread----
//// Rest
// const user = {
//     nome: 'Jr',
//     idade: 23,
//     empresa: 'UFPI'
// };
// const { nome, ...resto  } = user;
// const arr = [1, 2, 3, 4];
// const [ a, b, ...c ] = arr;
// function soma(...params){
//     return params.reduce((total, next) => total + next);
// }
//// Spread
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [ ...arr1, ...arr2 ];
// const user2 = {
//     nome: 'Jr 2',
//     idade: 23,
//     empresa: 'UFPI'
// };
// const user3 = { ...user2, nome: 'kkkk' };
// console.log(user3);
//// ----Aula Template Literals----
// const nome = "jr";
// const idade = 22;
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
//// ----Object Short Syntax----
// const nome = "jr";
// const idade = 23;
// const user = {
//     nome,
//     idade,
//     empresa: 'UFPI'
// };
// console.log(user);
"use strict";

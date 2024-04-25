/* var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(item) {
  return item.length;
});
 for (var i = 0; i < arr.length; i++) {	
  arrLength[i] = arr[i].length;
} 

alert( arrLength );

 *//* 
let mak= [2, 3, ,4, ,1, 444, -222, -3, 6]
let mao = mak.filter((mak, i) =>(mak > 0) )
console.log(mao);
 *//* 
let  mak= [2,-53453, 3, ,4, ,1, 444, -222,54346374, -2, -33, -59, -3, 6]
let mao = mak.filter((mak, i) =>(mak < 0) )

console.log(mao.length );
console.log( mao); *//* 
let mak = [2, 3, ,4, 1, 444, 222, 3, 6]
let man = mak.every((mak, i) => mak > 0)
console.log(man);
 *//* 
let mak = [2, 3, ,4, 1, 444, 222, -3, 6]
let man = mak.some((mak, i) => mak < 0)
console.log(man); *//* 
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'Alex', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];


let user = users.filter(user => user.name[0] === 'A');

console.log(user); *//* 
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'Alex', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let user = users.filter(user => user.group === 'admin');

console.log(user);  *//* 
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'Alex', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let user = users.filter(user => user.age > 25 && user.age < 30);

console.log(user); *//* 
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'Alex', age: 29, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let user = users.filter(user => user.id % 5 == 0  && user.age < 30);

console.log(user); *//* 
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'Alex', age: 29, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let user = users.filter(user => user.group === 'admin');
let use = user.map(user => {user.name = `.${user.name}`;
  return user;
});
console.log(use); */
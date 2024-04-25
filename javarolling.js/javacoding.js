/* let arr = [1, 2, 3, 4, 5, 6, 7]
let num = 0 
for (let i of arr) {
    num += i 
    
}
let ave = num / arr.length

console.log(ave)
 */
//task1--------------------------------
/* let arr = [1, 2, 3, 4, 5]
arr.splice(3, 0, `a`, `b`, `c`)
console.log(arr); */
//task2--------------------------------
/* let arr = [1, 2, 3, 4, 5]
arr.splice(4, 0,  `c`)
arr.splice(1, 0, `a`, `b`)
arr.splice(4, 0, `a`)
console.log(arr); */
//task3--------------------------------
/* const length = prompt("Введите длину массива:");

const array = [];

for (let i = 0; i < length; i++) {
    const element = prompt(`Введите элемент ${i + 1}:`);
    array.push(element);
}
console.log( array);
 */
//task4--------------------------------
/* const length = prompt("Введите длину массива:");

const array = [];

for (let i = 0; i < length; i++) {
    const element = prompt(`Введите элемент ${i + 1}:`);
    array.push(element);
} 
console.log( array.reverse()); */
//task5--------------------------------
/* const length = +(prompt("Введите длину массива:"));
const array = [];


for (let i = 0; i < length; i++) {
    const element = +(prompt(`Введите элемент ${i + 1}:`));
    array.push(element);
}


let sum = 0;
for (let num of array) {
    sum += num; 
}


console.log("Элементы массива:", array);
console.log("Сумма всех элементов:", sum); */
//task6--------------------------------
/* const length = prompt("Введите длину массива:");

const array = [];

for (let i = 0; i < length; i++) {
    const element = prompt(`Введите элемент ${i + 1}:`);
    array.push(element);
} 

if (array.length > 0) {
    alert(`длина массива превысила лимит`)
    alert(`shall we delete?`)
   const del = +(prompt(` write a number`))
   const del2 = +(prompt(` write a number`))
    array.splice(del, del2);
}


console.log( array); */
//task7--------------------------------
/* const length = +(prompt("Введите длину массива:"))
const array = []

for (let i = 0; i < length; i++) {
    const element = prompt(`Введите элемент ${i + 1}:`)
    array.push(+element)
}

let max;

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) { 
        if (max === undefined || array[i] > max) {
            max = array[i]
        }
    }
}

console.log( array )

alert(`Максимальное число: ${max}`) */
//task8--------------------------------
/* const length = +(prompt("Введите длину массива:"))
const array = []

for (let i = 0; i < length; i++) {
    const element = +(prompt(`Введите элемент ${i + 1}:`))
    array.push(element)
}

let sum = 0


for (let num of array) {
    sum += num
}


const average = sum / length


const resultArray = []


for (let i = 0; i < array.length; i++) {
    if (array[i] > average) {
        resultArray.push(array[i])
    }
}

console.log( resultArray) */
//task9--------------------------------
/* const arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1,  666, 23, 776]
let minIndex = 0
let maxIndex = 0


for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
        minIndex = i
    }
    if (arr[i] > arr[maxIndex]) {
        maxIndex = i
    }
}

const start = Math.min(minIndex, maxIndex) + 1
const end = Math.max(minIndex, maxIndex) - 1
const elementsBetweenMinMax = []

for (let i = start; i <= end; i++) {
    elementsBetweenMinMax.push(arr[i])
}

console.log("Ответ:", elementsBetweenMinMax.join(", ")) */
//90% С ПОМОЩЬЮ CHAT GPT Я НЕ СМОГ СДЕЛАТЬ САМ
//task10--------------------------------
/* const length = +(prompt(`Введите элемент`))
let array = [] 
let blurray = []
for (let i = 0; i < length; i++) {
    const element = +(prompt(`Введите элемент ${i + 1}:`))
    array.push(element)
}
for (let num of array){
    if (num > 0){
        blurray.push(num)
    }
}
console.log(array);
console.log(blurray);
console.log("Ответ:", blurray.join(", ")) */
//task11--------------------------------
/* const length = +(prompt(`Введите элемент`))
let array = [] 
let blurray = []
for (let i = 0; i < length; i++) {
    const element = +(prompt(`Введите элемент ${i + 1}:`))
    array.push(element)
}

let max = array[0]
let nom = 0

for (let i = 0; i < array.length; i++) {
    if ( array[i] > max) {
        max = array[i]
        nom = [i]
    }

}
    
    
console.log(max, nom);

console.log( array )

 */
//task12--------------------------------
/* const length = +(prompt(`Введите элемент`))
let array = [] 
let blurray = 0
for (let i = 0; i < length; i++) {
    const element = +(prompt(`Введите элемент ${i + 1}:`))
    array.push(element)
}
for (let num of array) {
    blurray += num
}
let result = blurray / array.length
console.log(result); */
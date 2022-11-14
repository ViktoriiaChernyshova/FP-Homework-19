// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]


const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );

function removeElement(array, item) {
    if(array.includes(item)) {
        array.splice(array.indexOf(item), 1);
    }
}
console.log(array);

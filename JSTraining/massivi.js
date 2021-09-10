// Массивы
//Concat
let a = [1, 2, 3]
let b = [4, 5, 6]
//Соеденяет два массива
let ab = a.concat(b)
console.log(ab)

//Reverce
let first = [1, 2, 3]
// Показывать с конца
first.reverse()
console.log(first)

//Push,unshift
let start = [1, 2, 3]
// Добавляет вконец
start.push('последний')
console.log(start)
// Добавляет вначало
start.unshift('первый')

//shift, pop
let elem = ['js', 'css', 'jq']
// Удаляет первый элемент
elem.shift()
console.log(elem)
// Удаляет последний
elem.pop()
console.log(elem)

//SLice
let arr = [1, 2, 3, 4, 5]
// Вырезает заданный элемент по индексу 0 от 3 до
    let arrSlc = arr.slice(0,3)
console.log(arrSlc)

//Splice
let j = [1, 2, 3, 4, 5]
// Вырезаем нужные эелементы
let l = j.splice(2 , 4)
let k = []
//Пушим в новый массив
    k.push(l)
console.log(k)

 //Добавляем новые элементы в массив в середину
let m = [1, 2, 3, 4, 5]
m.splice(2, 0, 'a', 'b', 'c')
console.log(m)

// Так же добавляем элементы,только в разных местах
let y = [1, 2, 3, 4, 5]
y.splice(1, 0, 'a', 'b')
y.splice(5,0,'c')
y.splice(7,0,'d')
console.log(y)

//Sort
// Cортирует массив по алфавиту или по возрастанию
let s = [3, 4, 1, 2, 7]
console.log(s.sort())

// Keys
//Получаем ключи
let c = {js:'test', jq: 'hello', css: 'world'}
console.log(Object.keys(c))

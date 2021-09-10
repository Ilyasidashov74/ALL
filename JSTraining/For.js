//Цикл For
let numbers = [1, 2, 3, 4, 5]
// Выводим числа из массива
for (numb of numbers)
    console.log(numb)


// Достаем ключи из объекта
let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for (let key in obj)
    console.log(key)

// Складываем значения из массива
let array = [1, 2, 3, 4, 5]
    let sum = 0
    for(arr of array)
        sum += arr
console.log(sum)

// Ищем в массиве цифру 4  с помощью условий
let go = [2, 5, 9, 15, 0, 4]
for(h of go) {
    if (h == 4){
        console.log('ЕСТЬ!')
    } else (console.log('Не нашел'))
}

//Преобразовываем число в строку и сравниваем первый символ
let anime = [10, 20, 30, 50, 235, 3000]
for(naruto of anime) {
    let chr = Math.abs(naruto).toString()[0];
    if (chr === '1' || chr === '2' || chr === '5'){
        console.log('Совпадение!')
    }else (console.log('HUI'))
}

//Преобразовываем массив в строку
let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let myMass = mass.toString()
console.log(myMass)

// Делим 1000 на 2 пока n не станет меньше 50 и выводим количество итераций приведя результат в целое число
let n = 1000
let num = 0
while( n > 50) {
    num++
    n /= 2
}
console.log(parseInt(n))



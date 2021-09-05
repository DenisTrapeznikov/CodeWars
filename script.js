const myString = "Bb Smith sent us six neatly arranged range bicycles"; //Задаем массив с которым будем работать
let myStringNew = myString.toLowerCase(); //Делаем все буквы в массиве строчными
Array = myStringNew.split(""); //Разделяем массив на отдельные буквы

let A = Array.find((item) => item == "a"); //Проверяем наличие буквы "a"
let E = Array.find((item) => item == "e"); //Проверяем наличие буквы "e"
let I = Array.find((item) => item == "i"); //Проверяем наличие буквы "i"
let O = Array.find((item) => item == "o"); //Проверяем наличие буквы "o"
let U = Array.find((item) => item == "u"); //Проверяем наличие буквы "u"

if (A == undefined) {
  console.log(myString, 0); //Если буква "a" отсутствует, то выдаем в консоль начальный массив и значение 0
} else if (E == undefined) {
  console.log(myString, 1); //Если буква "е" отсутствует, то выдаем в консоль начальный массив и значение 1
} else if (I == undefined) {
  console.log(myString, 2); //Если буква "i" отсутствует, то выдаем в консоль начальный массив и значение 2
} else if (O == undefined) {
  console.log(myString, 3); //Если буква "o" отсутствует, то выдаем в консоль начальный массив и значение 3
} else if (U == undefined) {
  console.log(myString, 4); //Если буква "u" отсутствует, то выдаем в консоль начальный массив и значение 4
}

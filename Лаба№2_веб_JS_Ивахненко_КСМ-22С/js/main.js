'use strict';
let begin=prompt("Введите number");
let array=[];

while(isNaN(begin))
{
    if(!isNaN(begin))
    alert("Введенная переменная: " + begin);
    else
    {
        alert("Это не number");
        begin = prompt("Введите number", begin);
    }
}

for(let i=0;i<=begin;i++)
{
    if(i % 5 == 0){
        array.push(i);
    }   
}

if(array.length != 0)
{
        console.log(array);
}
else{ 
        console.log('Числа отсутствуют');
}






let m='';
let n='';

while(m == '' || n == '')
{
m = Number(prompt("Введите начала диапазона", m));
n = Number(prompt("Введите конец диапазона", n));
if(m>n)
{
    alert("Обнаружена ошибка при вводе диапазона. Повторите ввод.");
}
}

var list = new Array;

nextPrime:
for (var i = m; i <= n; i++) {
  for (var j = m; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  list.push(i);
}
console.log(list);
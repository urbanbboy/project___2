//АТРИБУТЫ

// var a = document.querySelector('a');
// var oldhref = a.getAttribute('href');//присваивание атрибута href переменной oldhref

// a.setAttribute('href', 'https://ya.ru');//change the src
// a.setAttribute('title', 'dont click on me');//change the title
// a.textContent = 'Yandex';//содержимое тега a


//КЛАССЫ

// var box1 = document.querySelector('#box1');
// var box2 = document.querySelector('#box2');

// box1.classList.add('red');//добавление класса red в #box1

// var hasClass = box2.classList.contains('blue');//проверка box2 на наличие класса blue

// console.log(hasClass);

// if (hasClass) {
//     box2.classList.remove('blue');
// } else {
//     box2.classList.add('blue');
// }


//СОБЫТИЯ

var button = document.querySelector('button');
var h1 = document.querySelector('h1');
var input = document.querySelector('input');


// function buttonHandler() {
//     console.log('Clicked!');
//     h1.textContent = input.value;
// }

// h1.addEventListener('mouseenter', function() {
//     this.style.color = 'red';
//     this.style.backgroundColor = 'black';
// })

// h1.addEventListener('mouseleave', function() {
//     this.style.color = '#111';
//     this.style.backgroundColor = 'transparent';
// })

// button.addEventListener('click', buttonHandler);

function buttonHandler() {
    console.log('clicked!');
    h1.textContent = input.value;
}

button.addEventListener('click', buttonHandler);

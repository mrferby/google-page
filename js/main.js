function submitForm() {

    //5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве
    let objects = [
        {
            'name': 'Иван',
            'age': 24
        },{
            'name': 'Григорий',
            'age': 27
        },{
            'name': 'Владимир',
            'age': 51
        },{
            'name': 'Юрий',
            'age': 36
        }
    ];
    console.log(objects);
    alert('Массив объектов состоит из: ' + objects.length + ' объектов.');
    console.log('Массив объектов: ');
    for (let i=0; i<objects.length; i++){
        console.log(objects[i].name + ' ' + objects[i].age);
        alert('Массив объектов: ' + objects[i].name + ' ' + objects[i].age);
    }
    console.log('Св-во "name" первого объекта в массиве: ' + '"' + objects[0].name + '"');
    alert('Св-во "name" первого объекта в массиве: ' + '"'+ objects[0].name+ '"');

    //7.
    getMinMax();
    //8.
    replaceAB();
    
    //3.  JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
    const search_field = document.getElementById('search_field');
	if (search_field && search_field.value) {
        alert('Вы ввели: ' + search_field.value);

        //4. Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”
        if (search_field.value === "google") {
            alert('Yandex круче. Но это не точно');
            alertWithTimer();
        }
        return true;
    } else {
        alert('Вы не ввели ничего в поле для ввода... :с');
        return false;
    }
}

    //6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры 
    function superSum(a, b) { 
        a = Number(a);
        b = Number(b); 

        if (isNaN(a)){
            alert('Введено не число!');
        } else if (isNaN(b)){
            alert('Введено не число!');
        }
        else {
            alert('Сумма двух введенных чисел: ' + (a + b) );
        } 
    }
    
    //7. Создать массив из чисел в перемешку (не отсортированы). С помощью цикла for найти максимальный и минимальный элементы в массиве
    function getMinMax () {
        let array = [3,7,16,0,-9,11,-2,18];
        let min = Math.min( ...array ),
            max = Math.max( ...array );
        console.log('min:',min);
        console.log('max:',max);
    }
    getMinMax();

    //8.Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую
    function replaceAB() {
        let a = "XXX"; 
        let b = "YYY";
        console.log(a); // то что было изначально в a
        console.log(b); // то что было изначально в b
        let c = a;
        a = b;
        b = c;
        console.log(a); // то что было изначально в b
        console.log(b); // то что было изначально в a
    }
    replaceAB();

    //9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)
    function getMax(arr) {
        let max = 0;
        if (arr != '' && arr != undefined){
            max = Math.max( ...arr );
            console.log('max:',max);
        }
        return max;
    }
    getMax();

    //10. показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)
    function alertWithTimer() {
        setTimeout(() => {
            alert('яндекс круче всех ->? с таймером 3 секунды');
        }, 3000);
    }
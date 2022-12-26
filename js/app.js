const items = document.querySelectorAll('.countdown-item > h2');
let countDate = new Date(2022, 12).getTime()

getCountTime();

function getCountTime() {
    
    // Получить текущее время
    const currentDate = new Date().getTime()

    // Найти разницу времени

    const distance = countDate - currentDate
    
    //1с = 1000мс
    //1м = 60с
    //1ч = 60м
    //1д = 24ч

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Подсчет для дней, часов, минут и секунд
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    // Создаем массив с переменными
    const values = [days, hours, minutes,seconds];
    
    
    // Добавляем значение переменнных на страницу
    items.forEach(function(item, index) {
        item.textContent = (values[index])
        
    })
      
    let countdown = setInterval(getCountTime, 1000);
    if( distance <= 0) {
        clearInterval(countdown) 
        showMessage()
    }
}
function showMessage () {
    const counter = document.getElementById('#counter');
    const title = document.getElementById('title');
    counter.classList.add('hidden')
    title.innerHTML = `<h1 id ='title' class="title new-title">
    С новым 2023 годом!
    </h1>`
}

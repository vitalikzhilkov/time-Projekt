const container = document.getElementById('cardsContainer');

const recommendations = [
    {title:'Pomodoro', description:'Работайте короткими интервалами по 25 минут с 5-мин перерывами'},
    {title:'GTD', description:'Списки задач для разгрузки памяти и четкого планирования'},
    {title:'Правило 80/20', description:'80% результата достигается 20% усилий'},
    {title:'Книга "Глубокая работа"', description:'Как концентрироваться и выполнять сложные задачи'},
];

container.innerHTML = '';
recommendations.forEach(rec=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${rec.title}</h3><p>${rec.description}</p>`;
    container.appendChild(card);
});

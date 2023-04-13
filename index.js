function game1() {
    let monthNumber = Number(prompt(`Введите номер месяца`));
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return alert(`Зима`);
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return alert(`Весна`);
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return alert(`Лето`);
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        return alert(`Осень`);
    } else {
        return alert(`Такого месяца не существует`);
    }      
}


function game2() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() -0.5);
    alert(words);
    let inputWordFirst = prompt('Напишите первое слово');
    let inputWordLast = prompt('Напишите последнее слово');
    if (inputWordFirst === words[0] && inputWordLast === words[6]) {
        return alert('Вы угадали');
    } else if (inputWordFirst === words[0] || inputWordLast === words[6]) {
        return alert('Вы были близки к победе!');
    } else {
        return alert('Вы не угадали');
    }
}

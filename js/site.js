const form = document.forms[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = [...new FormData(form).values()];
    console.log(values);

    if (!checkNotNull(values[0])) return showMessage('error', 'Заполните поле ФИО');
    if (!checkNotNull(values[1])) return showMessage('error', 'Заполните поле Email');
    if (!checkNotNull(values[2])) return showMessage('error', 'Заполните поле ТЕЛЕФОН');
    if (!checkPhone(values[2])) return showMessage('error', 'Неверно введен номер телефона');
    if (!checkRadio(values[3])) return showMessage('error', 'Выберете район доставки');

    if (customCheck1.checked) {
        return showMessage('success', 'Заказ оформлен');
    }
    return showMessage('error', 'Потдвердите согласие на обработку данных');   
});

function checkNotNull(str) {
    return str !== '';
}

function checkPhone(phone) {
    var reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return phone != "" && reg.test(phone);
}

function checkRadio(radio) {

    var inp = document.getElementsByName('customRadio');
    for (var i = 0; i < inp.length; i++) {
        var radio = inp[i];
        if (radio.type == "radio" && radio.checked) {
            return true
        }
    }
    return false;
}

function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
    });
}
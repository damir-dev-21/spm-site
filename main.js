var language = 'uz';

let _res = {
    'name':'',
    'phone':'',
    'courses':[]
}
let _translations = {
    'ru':{
        'name':'Ваше имя',
        'phone':'Ваш номер телефона',
        'courses':'Какие курсы вас интересуют?',
        'English':'Английский',
        'Math':'Математика',
        'Biologiya':'Биология',
        'Chemis':'Химия',
        'Uzb':'Узбекский язык',
        'Rus':'Русский язык',
        'History':'История',
        'send':'Записаться',
        'comment':'Следите за обновлениями и в других сетях, не отставайте от новостей!',
        'reviews':'Отзывы',
        'call':'Позвонить',
        'geo':'Местоположение',
        'news':'Новости',
        'life':'Жизнь студентов',
        'rooms':'Помещения',
        'message_name':'Заполните имя',
        'message_phone':'Заполните номер телефона',
        'message_course':'Выберите курс',
        'message_error_phone':'Неправильно введен номер телефона',
        'message_success':'Успешно',
        'message_success_desc':'Ваша заявка отправлена, ожидайте звонка!',
    },
    'uz': {
        'name': 'Ismingiz',
        'phone': 'Raqamingiz',
        'courses': 'Qaysi kurs haqida ma`lumot olmoqchisiz?',
        'English': 'Ingliz tili',
        'Math': 'Matematika',
        'Biologiya': 'Biologiya',
        'Chemis': 'Kimyo',
        'Uzb': 'Ona tili',
        'Rus': 'Rus tili',
        'History': 'Tarix',
        'send': 'Yuborish',
        'comment': 'Bizni boshqa tarmoqlarda ham kuzating, yangiliklardan qolib ketmang!',
        'reviews': 'Natijalar',
        'call': 'Telefon',
        'geo': 'Joylashuvimiz',
        'news': 'Yangiliklar',
        'life': 'Ijtimoiy hayot',
        'rooms': 'Xonalar',
        'message_name': 'Siz ismingizni kiritmadingiz',
        'message_phone': 'Siz telefon raqamingizni kiritmadingiz',
        'message_course': 'Kursni tanlang',
        'message_error_phone': 'Telefon raqami noto`gri kiritilgan',
        'message_success_desc': 'Siz ro`yhatdan o`tdingiz !!!',
    }
}

let _form = document.getElementById('myForm')
let modal = document.getElementById("myModal");
let closeModalBtn = document.getElementsByClassName("close")[0];

_form.addEventListener('submit', (e)=> { e.preventDefault() })

closeModalBtn.onclick = function () {
    modal.style.display = "none";
}

function updateText() {
    var titleElement = document.getElementById('name');
    var contentElement = document.getElementById('phone');
    var coursesElement = document.getElementById('courses');
    var englishElement = document.getElementById('english-text');
    var mathElement = document.getElementById('math-text');
    var chemisElement = document.getElementById('chemis-text');
    var bioElement = document.getElementById('bio-text');
    var uzElement = document.getElementById('uz-text');
    var ruElement = document.getElementById('ru-text');
    var tarixElement = document.getElementById('tarix-text');
    var submitElement = document.getElementById('btnSubmit');
    var commentElement = document.getElementById('comment');
    var reviewsElement = document.getElementById('reviews');
    var callElement = document.getElementById('call');
    var geoElement = document.getElementById('geo');
    var newsElement = document.getElementById('news');
    var lifeElement = document.getElementById('life');
    var roomsElement = document.getElementById('rooms');
    var messageNameElement = document.getElementById('errorText');
    var messagePhoneElement = document.getElementById('errorTel');
    var messageCourseElement = document.getElementById('checkError');
    var modalMessageCourseElement = document.getElementById('modal-message');

    titleElement.placeholder = _translations[language]['name'];
    contentElement.placeholder = _translations[language]['phone'];
    coursesElement.textContent = _translations[language]['courses'];
    englishElement.textContent = _translations[language]['English'];
    mathElement.textContent = _translations[language]['Math'];
    bioElement.textContent = _translations[language]['Biologiya'];
    chemisElement.textContent = _translations[language]['Chemis'];
    uzElement.textContent = _translations[language]['Uzb'];
    ruElement.textContent = _translations[language]['Rus'];
    tarixElement.textContent = _translations[language]['History'];
    submitElement.textContent = _translations[language]['send'];
    commentElement.textContent = _translations[language]['comment'];
    reviewsElement.textContent = _translations[language]['reviews'];
    callElement.textContent = _translations[language]['call'];
    geoElement.textContent = _translations[language]['geo'];
    newsElement.textContent = _translations[language]['news'];
    lifeElement.textContent = _translations[language]['life'];
    roomsElement.textContent = _translations[language]['rooms'];
    messageNameElement.textContent = _translations[language]['message_name'];
    messagePhoneElement.textContent = _translations[language]['message_phone'];
    messageCourseElement.textContent = _translations[language]['message_course'];
    modalMessageCourseElement.textContent = _translations[language]['message_success_desc'];
}

let _nameElement = document.getElementById('name')
let _phoneElement = document.getElementById('phone')

const setName = () => _res['name'] = _nameElement.value
const setPhone = () => _res['phone'] = _phoneElement.value
const setCourses = (checkbox) => {
    var value = checkbox.value;

    if (checkbox.checked) {
        _res['courses'].push(value);
    } else {
        var index = _res['courses'].indexOf(value);
        if (index !== -1) {
            _res['courses'].splice(index, 1);
        }
    }
}

function send(){

    let selectRegionElement = document.getElementById('selectRegion')

    var messageNameElement = document.getElementById('errorText');
    var messagePhoneElement = document.getElementById('errorTel');
    var messageCourseElement = document.getElementById('checkError');

    if(_res['name'] == ''){
        messageNameElement.style.display = 'block';
        return
    }else{
        messageNameElement.style.display = 'none';
    }
    if(_res['phone'] == ''){
        messagePhoneElement.style.display = 'block';
        return
    } else {
        messagePhoneElement.style.display = 'none';
    }
    if(_res['courses'].length == 0){
        messageCourseElement.style.display = 'block';
        return
    } else {
        messageCourseElement.style.display = 'none';
    }

    if(_res['phone'].length != 9){
        messagePhoneElement.style.display = 'block';
        messagePhoneElement.textContent = _translations[language]['message_error_phone']
        return
    }else{
        messagePhoneElement.style.display = 'none';
        messagePhoneElement.textContent = _translations[language]['message_phone']
    }

    modal.style.display = "block";

    const tg_token = "6016010992:AAGTRQsdF46sZT7piRva0q_ziiylEM0JwrM";

    const url = `https://api.telegram.org/bot${tg_token}/sendMessage` // The url to request
    const obj = {
        chat_id: '-931253901', 
        text: `
            Salom, Yangi Habar! 🙉\nIsmi: ${_res['name']},\nRaqam: +998${_res['phone']},\nKursi: ${_res['courses']},\nRegion: ${selectRegionElement.value}\n
        ` 
    };
    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));

    console.log(_res);
}

function changeLang(lang) {
    language = lang;
    updateText();
}


window.onload = updateText()
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
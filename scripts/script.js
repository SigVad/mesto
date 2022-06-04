// извлекаем попап-элемент, кнопки редактировать, сохранить, закрыть
const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
// извлекаем ввод имени, профессии
const formInput = popupElement.querySelector('.edit-popup__form');
const profileNameInput = formInput.querySelector('.edit-popup__input_js_name');
const profileProfessionInput = formInput.querySelector('.edit-popup__input_js_profession');
// извлекаем имя, профессию
const profileElement = document.querySelector('.profile');
const editButton = profileElement.querySelector('.profile__edit-button');
const profileName = profileElement.querySelector('.profile__name');
const profileProfession = profileElement.querySelector('.profile__profession');

const addCardButton = profileElement.querySelector('.profile__add-button');
//код клавиши Esc, Enter для наглядности
//const ESC_KEY_CODE = 27;
//const ENTER_KEY_CODE = 13;

// извлекаем список карточек для заполнения по шаблону
const cardsList = document.querySelector('.elements__list');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
]; 

function addCardInMassive(massive, newCardLink, newCardName) {
  elem={
    name: '',
    link: ''
  };
  elem.name = newCardName;
  elem.link = newCardLink;
  massive.push(elem);
  console.log(massive);
}

let newCardName = 'Домбай';
let newCardLink = './images/element/kirill-pershin-1556355-unsplash.jpg';
// addCardInMassive(initialCards, newCardLink, newCardName);

//функция добавить карту на страницу по шаблону
function cardInDOM(cardLink, cardName) {
  const cardTemplate = document.querySelector('#cards-template').content;

  console.log(cardTemplate);
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  
  console.log(cardElement);
  cardElement.querySelector('.element__image').src = cardLink;
  cardElement.querySelector('.element__title').textContent = cardName;
  cardsList.append(cardElement);
}

for (let i=0; i < initialCards.length; i++){
  let cardLink = initialCards[i].link;
  let cardName = initialCards[i].name;
  cardInDOM(cardLink, cardName);
}


//функции открыть и закрыть попап
function openPopup() {
  //добавить класс в список классов элемента popup_opened
  popupElement.classList.add('popup_opened');
  //присвоить текущие ззачения имени и профессии
  profileNameInput.value = profileName.textContent;
  profileProfessionInput.value = profileProfession.textContent;
  //обработчик закрытия на Esc
  //document.addEventListener('keyup', onDocumentKeyUp)
}
// кнопка сохранения
function savePopup(evt) {
  evt.preventDefault();
  profileName.textContent =  profileNameInput.value;
  profileProfession.textContent = profileProfessionInput.value;
  closePopup();
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
  //document.removeEventListener('keyup', onDocumentKeyUp)
}
// function onDocumentKeyUp(event){
//   if (event.keyCode === ESC_KEY_CODE){closePopup()}
//   if (event.keyCode === ENTER_KEY_CODE){savePopup()}}

//слушатели события нажатий на кнопки
//addCardButton.addEventListener('click', cardInDOM(newCardLink, newCardName));
editButton.addEventListener('click', openPopup);
formInput.addEventListener('submit', savePopup);
closeButton.addEventListener('click', closePopup);
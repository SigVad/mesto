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
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt:  'Зеленые горные склоны.'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt:  'Зимняя река.'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    // alt:  'Одинаковые панельные дома.'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt:  'Мох и редкие кусты в долине.'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt:  'Железная дорога через лес.'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt:  'Ледяное озеро и скалистый берег.'
  }
  // ,{
  //   name: 'Гора Эльбрус',
  //   link: './images/element/kirill-pershin-1404681-unsplash.jpg',
  //   alt:  'Горная долина и Эльбрус на горизонте.'
  // },
  // {
  //   name: 'Домбай',
  //   link: './images/element/kirill-pershin-1556355-unsplash.jpg',
  //   alt:  'Скалистая вершина горного хребта.'
  // },
  // {
  //   name: 'Карачаево-Черкесия',
  //   link: './images/element/kirill-pershin-1088404-unsplash.jpg',
  //   alt:  'Старинный этнический храм в горах.'
  // }
]; 

// предзагрузка карт
initialCards.forEach((card) => cardInDOM(card.link, card.name, card.alt));

function addCardInMassive(massive, newCardLink, newCardName) {
  elem={
    name: '',
    link: ''
  };
  elem.name = newCardName;
  elem.link = newCardLink;
  massive.push(elem);
}
let newCardName = 'Домбай';
let newCardLink = './images/element/kirill-pershin-1556355-unsplash.jpg';

//функция добавления карты на страницу по шаблону
function cardInDOM(cardLink, cardName, cardAlt) {
  const cardTemplate = document.querySelector('#cards-template').content;

  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  
  
  cardElement.querySelector('.element__image').src = cardLink;
  cardElement.querySelector('.element__title').textContent = cardName;
  if (cardAlt) cardElement.querySelector('.element__image').alt = cardAlt;

  cardsList.append(cardElement);
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

// функция лайка карточек
function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
  }

// функция удаления карточек
function deleteCard(evt) {
  evt.target.closest('.card-item').remove();
}

// функция добавления карточек при загурзке
initialCards.forEach(function (card) {
  renderCard(card.name, card.link)
});

editButton.addEventListener('click', openPopup);
formInput.addEventListener('submit', savePopup);
closeButton.addEventListener('click', closePopup);
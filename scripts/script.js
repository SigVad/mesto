// извлекаем попап-элемент, кнопки редактировать, сохранить, закрыть
const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_card');
const popupImage = document.querySelector('.popup_type_image');
const closeButton = popupEdit.querySelector('.popup__close-button');//? как с другими то?
// извлекаем ввод имени, профессии
const formInput = popupEdit.querySelector('.popup__form');
const profileNameInput = formInput.querySelector('.popup__input_name');
const profileProfessionInput = formInput.querySelector('.popup__input_profession');
// извлекаем имя, профессию
const profileElement = document.querySelector('.profile');
const editButton = profileElement.querySelector('.profile__edit-button');
const profileName = profileElement.querySelector('.profile__name');
const profileProfession = profileElement.querySelector('.profile__profession');

const addCardButton = profileElement.querySelector('.profile__add-button');
const cardsTemplate = document.querySelector('#cards-template');
// const likeButton = cardsTemplate.querySelector('.element__like-button');
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
  }
  // ,{
  //   name: 'Гора Эльбрус',
  //   link: './images/element/kirill-pershin-1404681-unsplash.jpg'
  // },
  // {
  //   name: 'Домбай',
  //   link: './images/element/kirill-pershin-1556355-unsplash.jpg'
  // },
  // {
  //   name: 'Карачаево-Черкесия',
  //   link: './images/element/kirill-pershin-1088404-unsplash.jpg'
  // }
]; 

// предзагрузка карт
initialCards.forEach((card) => cardInDOM(card.link, card.name));

function addCardInMassive(massive, newCardLink, newCardName) {
  const elem={
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
function cardInDOM(cardLink, cardName) {
  const cardTemplate = cardsTemplate.content;

  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  
  cardElement.querySelector('.element__image').src = cardLink;
  cardElement.querySelector('.element__title').textContent = cardName;

  cardsList.append(cardElement);
}



//функции открыть и закрыть попап, принимает элемент
function openPopup(popup) {
  //добавить класс в список классов элемента popup_opened
  popup.classList.add('popup_opened');
}

function onPopupEdit (){

  openPopup(popupEdit);
  //присвоить текущие ззачения имени и профессии
  profileNameInput.value = profileName.textContent;
  profileProfessionInput.value = profileProfession.textContent;
  //обработчик закрытия на Esc
  //document.addEventListener('keyup', onDocumentKeyUp)
}

function onPopupAddCard (){
  openPopup(popupAddCard);

}

// function addCard(evt)  {
//   //отменяет действие события по умолчанию.
//   evt.preventDefault();
//   cardInDOM(cardLink, cardName)
//   closePopup();
// }

// кнопка сохранения
function savePopup(evt) {

  evt.preventDefault();
  profileName.textContent =  profileNameInput.value;
  profileProfession.textContent = profileProfessionInput.value;
  closePopup(evt);
}

function closePopup(evt) {
  //подняться до родителя с классом popup и удалить его класс popup_opened
  evt.target.closest('.popup').classList.remove('popup_opened');
  // document.removeEventListener('keyup', onDocumentKeyUp)
}
// function onDocumentKeyUp(event){
//   if (event.keyCode === ESC_KEY_CODE){closePopup()}
//   if (event.keyCode === ENTER_KEY_CODE){savePopup()}}

// слушатели события нажатий на кнопки

// функция лайка карточек класс добавляет, но не работает
function likeCard(evt) {
  console.log(evt.target.classList);
  evt.target.classList.toggle('.element__like-button_active');
  console.log(evt.target.classList);
}

// функция удаления карточек
function deleteCard(evt) {
  evt.target.closest('.card-item').remove();
}

// слушатели события нажатий на кнопки
//document.addEventListener('click', likeCard);
editButton.addEventListener('click', onPopupEdit);
addCardButton.addEventListener('click', onPopupAddCard);
formInput.addEventListener('submit', savePopup);
closeButton.addEventListener('click', closePopup);
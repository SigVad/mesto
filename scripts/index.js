import Card from './card.js';
import FormValidator from './FormValidator.js';
//Список селекторов для валидации
const objValidationList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
// извлекаем попапы
const popupProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_card');
// извлекаем имя, профессию
const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileProfession = profileElement.querySelector('.profile__profession');
// переменные попап профиль
// извлекаем форму, ввод имени, профессии
const formProfile = popupProfile.querySelector('.popup__form_profile');
const profileNameInfo = formProfile.querySelector('.popup__input_name');
const profileProfessionInfo = formProfile.querySelector('.popup__input_profession');
// переменные попап добавить карту
const formAddCard = popupAddCard.querySelector('.popup__form_add-card');
const newCardName = formAddCard.querySelector('.popup__input_image-title');
const newCardLink = formAddCard.querySelector('.popup__input_image-link');
// извлекаем кнопки главной страницы
const buttonProfile = profileElement.querySelector('.profile__edit-button');
const buttonAddCard = profileElement.querySelector('.profile__add-button');
// извлекаем шаблон темплейт для карт
// извлекаем список карточек, чтобы заполнить по шаблону
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
];
//создать массив форм
const formList = Array.from(document.querySelectorAll(objValidationList.formSelector));
//создать объект экземпляров класса валидации форм, чтобы обращаться к конкретному экземпляру
const formListObj = {}; 

//функция открыть попап (элемент Попап)
export default function openPopup(popup) {
  //добавить класс в список классов элемента popup_opened
  popup.classList.add('popup_opened');
  //обработчик закрытия на Esc
  document.addEventListener('keyup', onDocumentKeyUp);
  popup.addEventListener('click', clickToExit);
}
//функция добавить карту и очистить форму
function addCard(evt)  {
  evt.preventDefault();
  const cardName = newCardName.value;
  const cardLink = newCardLink.value;
  addObjCard(cardLink, cardName);
  formAddCard.reset();
  closePopup(popupAddCard);
 }
// кнопка сохранения
function savePopup(evt) {
// отменить выполнение действия по-умолчанию
  evt.preventDefault();
  profileName.textContent =  profileNameInfo.value;
  profileProfession.textContent = profileProfessionInfo.value;
  closePopup(popupProfile);
}
//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp);
  popup.removeEventListener('click', clickToExit);
}
//функция для выхода по Esc
const onDocumentKeyUp = (evt) => {
  if (evt.key === 'Escape'){
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive)
  }
}
// функция закрытия попапа по клику на фон, если клик по элементу с классом попап
const clickToExit = (evt) => {
  if ((evt.target.classList.contains('popup'))||(evt.target.classList.contains('popup__close-button'))) {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}
//Открывает попап редактирования профиля
function openPopupProfile() {
  //присвоить текущие ззачения имени и профессии
  profileNameInfo.value = profileName.textContent;
  profileProfessionInfo.value = profileProfession.textContent;
  //проверить валидность
  formListObj.formProfile.toggleButtonState();
  // принудительно сбросить ошибки для формы
  formListObj.formProfile.hideFormError();
  openPopup(popupProfile);
}
//Открывает попап добавления карт
function openPopupAddCard() {
  formListObj.formAddCard.toggleButtonState();
  openPopup(popupAddCard);
}

//функция создаст экземпляр класса Card, добавит в DOM
function addObjCard(link, name) {
  const card = new Card(link, name, '.element');
  renderCard(card);
}
// публичная функция отрисовки карты (ссылка, название)
function renderCard(card){
  cardsList.prepend(card.createCard());
}
// предзагрузка карт
initialCards.forEach((item) => {
  addObjCard(item.link, item.name);
});

//Обойти массив, для каждой формы запустить валидацию
formList.forEach((formElement) => {
  const validator = new FormValidator(objValidationList, formElement);
  formListObj[`${formElement.name}`] = validator;
  validator.enableValidation();
});
// слушатели открывашки
buttonProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', openPopupAddCard);
// слушатели форм заполнения профиля и добавления карты
formProfile.addEventListener('submit', savePopup);
formAddCard.addEventListener('submit', addCard);
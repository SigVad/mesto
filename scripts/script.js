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
const popupImage = document.querySelector('.popup_type_image');
//
// извлекаем имя, профессию
const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileProfession = profileElement.querySelector('.profile__profession');
//
// переменные попап профиль
// извлекаем форму, ввод имени, профессии
const formProfile = popupProfile.querySelector('.popup__form_profile');
const profileNameInfo = formProfile.querySelector('.popup__input_name');
const profileProfessionInfo = formProfile.querySelector('.popup__input_profession');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button');
//
// переменные попап добавить карту
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close-button');
const formAddCard = popupAddCard.querySelector('.popup__form_add-card');
const newCardName = formAddCard.querySelector('.popup__input_image-title');
const newCardLink = formAddCard.querySelector('.popup__input_image-link');
//
// переменные попап фото
const buttonClosePopupImage = popupImage.querySelector('.popup__close-button');
const imageSrc = popupImage.querySelector('.popup__image');
const imageCaption = popupImage.querySelector('.popup__image-caption');
//
// извлекаем кнопки главной страницы
const buttonProfile = profileElement.querySelector('.profile__edit-button');
const buttonAddCard = profileElement.querySelector('.profile__add-button');
//
// извлекаем шаблон темплейт для карт
const cardsTemplate = document.querySelector('#cards-template');
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
// функция отрисовки карты (ссылка, название)
function renderCard(cardLink, cardName){
  cardsList.prepend(createCard(cardLink, cardName));
};
//функция добавления карты на страницу по шаблону (ссылка, название)
function createCard(cardLink, cardName) {
  const cardElement = cardsTemplate.content.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardElement.querySelector('.element__title').textContent = cardName;
  // добавить слушатели нажатия картинки, кнопок Лайк и Корзина
  cardElement.querySelector('.element__trash-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__like-button').addEventListener('click', likeCard);
  cardImage.addEventListener('click', function () {openPopupImage(cardLink, cardName, cardImage.alt);});
  //вернуть карту в рендер
  return cardElement;
}
//функция открыть попап (элемент Попап)
function openPopup(popup) {
  //добавить класс в список классов элемента popup_opened
  popup.classList.add('popup_opened');
  //обработчик закрытия на Esc
  document.addEventListener('keyup', onDocumentKeyUp);
}
//функция добавить карту и очистить форму
function addCard(evt)  {
  evt.preventDefault();
  const cardName = newCardName.value;
  const cardLink = newCardLink.value;
  renderCard(cardLink, cardName)
  closePopup(popupAddCard);
  formAddCard.reset();
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
  
}
//функция для выхода по Esc
const onDocumentKeyUp = (evt) => {
  if (evt.key === 'Escape'){
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive)
  }
}
// функция закрытия попапа по клику на фон, если клик по элементу с классом попап
const clickOverlayToExit = (evt) => {
  if (evt.target.classList.contains('popup')){
    closePopup(evt.target)
  }
}
function openPopupProfile() {
  openPopup(popupProfile);
  //присвоить текущие ззачения имени и профессии
  profileNameInfo.value = profileName.textContent;
  profileProfessionInfo.value = profileProfession.textContent;
  //убрать возможные ошибки и проверить форму
  let formElement = popupProfile.querySelector(objValidationList.formSelector);
  hideFormError(formElement, objValidationList);
  setEventListeners(formElement, objValidationList);
}
function openPopupImage(image, text, altText) {
  imageSrc.src = image;
  imageSrc.alt = altText;
  imageCaption.textContent = text;
  openPopup(popupImage);
}
// функция лайка карточек
function likeCard(evt) {
  evt.target.classList.toggle('element__like-button_active');
}
// функция удаления карточек
function deleteCard(evt) {
  evt.target.closest('.element').remove();
}
// предзагрузка карт по одной
initialCards.forEach((card) => renderCard(card.link, card.name));
// слушатели открывашки
buttonProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', function () {openPopup(popupAddCard);});
// слушатели форм заполнения профиля и добавления карты
formProfile.addEventListener('submit', savePopup);
formAddCard.addEventListener('submit', addCard);
// слушатели закрывашки по кнопке
buttonClosePopupProfile.addEventListener('click', function () {closePopup(popupProfile);});
buttonClosePopupAddCard.addEventListener('click', function () {closePopup(popupAddCard);});
buttonClosePopupImage.addEventListener('click', function () {closePopup(popupImage);});
// слушатели закрывашки по фону
popupProfile.addEventListener('click', clickOverlayToExit);
popupAddCard.addEventListener('click', clickOverlayToExit);
popupImage.addEventListener('click', clickOverlayToExit);
const profileElement = document.querySelector('.profile');
export const profileName = profileElement.querySelector('.profile__name');
export const profileProfession = profileElement.querySelector('.profile__profession');
// извлекаем кнопки главной страницы
export const buttonProfile = profileElement.querySelector('.profile__edit-button');
export const buttonAddCard = profileElement.querySelector('.profile__add-button');

export const objCardList = {
  templateSelector: '#cards-template',
  cardClass: '.element',
  imageClass: '.element__image',
  titleClass: '.element__title',
  likeButtonClass: '.element__like-button',
  likeButtonActiveClass: 'element__like-button_active',
  trashButtonClass: '.element__trash-button'
};

export const initialCards = [
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

//Список селекторов для валидации
export const objValidationList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// переменные попап картинка
export const popupImage = document.querySelector('.popup_type_image');
export const imageSrc = popupImage.querySelector('.popup__image');
export const imageCaption = popupImage.querySelector('.popup__image-caption');

// переменные попап профиль
export const popupProfile = document.querySelector('.popup_type_edit');
// извлекаем форму, ввод имени, профессии
export const formProfile = popupProfile.querySelector('.popup__form_profile');
export const profileNameInfo = formProfile.querySelector('.popup__input_name');
export const profileProfessionInfo = formProfile.querySelector('.popup__input_profession');

// переменные попап добавить карту
export const popupAddCard = document.querySelector('.popup_type_card');
export const formAddCard = popupAddCard.querySelector('.popup__form_add-card');
export const newCardName = formAddCard.querySelector('.popup__input_image-title');
export const newCardLink = formAddCard.querySelector('.popup__input_image-link');
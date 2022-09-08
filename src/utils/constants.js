// кнопки главной страницы
const profileElement = document.querySelector('.profile');
export const buttonProfile = profileElement.querySelector('.profile__edit-button');
export const buttonAddCard = profileElement.querySelector('.profile__add-button');
export const buttonAvatar = profileElement.querySelector('.profile__avatar-button');

// данные профиля
export const objProfileInfo = {
  profileNameSelector: '.profile__name', 
  profileJobSelector: '.profile__profession',
  profileAvatarSelector: '.profile__avatar-image'
}

// карты на главной странице
// контейнер для вставки карт (элементов разметки)
export const cardsListSelector = '.elements__list';
// Список селекторов элементов карты
export const objCardList = {
  templateSelector: '#cards-template',
  cardClass: '.element',
  imageClass: '.element__image',
  titleClass: '.element__title',
  likeButtonClass: '.element__like-button',
  likeButtonActiveClass: 'element__like-button_active',
  trashButtonClass: '.element__trash-button'
};
// селектор шаблона карты
export const templateCardSelector = '#cards-template';
// массив карт для предзагрузки
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
// Список селекторов попапов
export const objPopupList = {
  popupCloseButtonSelector: 'popup__close-button',
  popupSubmitSelector: 'popup__button',
  popupOpenedSelector: 'popup_opened',
  popupInputSelector: '.popup__input',
  popupFormSelector: '.popup__form'
}

// попап профиль
export const popupProfileSelector = '.popup_type_edit';
const popupProfile = document.querySelector(popupProfileSelector);
// извлекаем форму, ввод имени, профессии
export const formProfile = popupProfile.querySelector('.popup__form_profile');
export const profileNameInfo = formProfile.querySelector('.popup__input_name');
export const profileProfessionInfo = formProfile.querySelector('.popup__input_profession');

// попап добавить карту
export const popupAddCardSelector = '.popup_type_card';
const popupAddCard = document.querySelector(popupAddCardSelector);
// извлекаем форму, поля ввода названия, ссылки
export const formAddCard = popupAddCard.querySelector('.popup__form_add-card');

// попап картинка
// Список селекторов попапа картинка
export const objPopupImageInfo = {
  popupImageSelector:'.popup_type_image',
  imageSelector: '.popup__image',
  captionSelector: '.popup__image-caption'
}

// попап аватар
export const popupAvatarSelector = '.popup_type_avatar';
const popupAvatar = document.querySelector(popupAvatarSelector);
// извлекаем форму, поля ввода названия, ссылки
export const formAvatar = popupAvatar.querySelector('.popup__form_avatar');


// попап подтверждение
export const popupConfirmationSelector = '.popup_type_confirmation';
export const popupConfirmation = document.querySelector(popupConfirmationSelector);
// кнопка попапа подтверждение
export const buttonConfirmation = popupConfirmation.querySelector('.popup__button');
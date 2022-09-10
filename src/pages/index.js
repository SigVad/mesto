// подключаем стили для сборки
import './index.css';
// вгружаем классы
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWitchConfirmation.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
// вгружаем используемые константы для классов
import {
  buttonProfile, // кнопка Открыть профиль
  buttonAddCard, // кнопка Открыть добавление карты
  buttonAvatar, // кнопка Открыть аватар
  objProfileInfo,   // данные профиля
  cardsListSelector,// контейнер для вставки карт (элементов разметки)
  objCardList, // Список селекторов элементов карты
  templateCardSelector, // селектор шаблона карты
  initialCards, // массив карт для предзагрузки
  objValidationList, // Список селекторов для валидации
  objPopupList,   // Список селекторов попапов
  popupProfileSelector, // селектор попапа профиля
  formProfile, // форма попапа
  profileNameInfo, // поле ввода имени
  profileProfessionInfo, // поле ввода профессии
  popupAddCardSelector, // селектор попапа добавления карты
  formAddCard, // форма попапа
  objPopupImageInfo, // Список селекторов попапа картинка
  formAvatar, // форма попапа
  popupAvatarSelector, // селектор попапа аватар
  popupConfirmationSelector, // селектор попапа подтверждение
  buttonConfirmation // кнопка попапа подтверждение
} from '../utils/constants.js';

//ОСНОВНОЕ ОКНО
//создадим api и передадим ему юрл сервера и код авторизации
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-49",
  headers: {
    authorization: "f6d44b42-c81d-4168-83e7-55a4e60ba01f",
    "Content-Type": "application/json",
  },
});
//создать экземпляр данных профиля
const userInfo = new UserInfo(objProfileInfo);
//[взять пользователя, взять карты]
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cardItems]) => {
    userInfo.setUserId(user._id); //запомнить ИД
    userInfo.setUserInfo(user); //установить имя и описание
    userInfo.setUserAvatar(user.avatar); //установить аватар
    cardsList.renderItems(cardItems); //отрисовать карты
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

  // слушатели кнопок открытия попапов
buttonProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', openPopupAddCard);
buttonAvatar.addEventListener('click', openPopupAvatar);

// ПОПАП ПРОФИЛЯ
//запустить валидацию
const profileFormValidator = new FormValidator(objValidationList, formProfile);
profileFormValidator.enableValidation();
//создать попап
const profilePopup = new PopupWithForm(
  objPopupList,
  {
    handleSubmitForm: function handleSubmitFormFunction(newUserData) {
      profilePopup.loader(objPopupList.popupSubmitSelector, true);
      return api
        .changeUserInfo(newUserData)
        .then(() => {
          userInfo.setUserInfo(newUserData);;
          profilePopup.close();
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() => {
          profilePopup.loader(objPopupList.popupSubmitSelector, false);
        });
    }
  },
  { loadText: 'Сохранение...', defaultText: 'Сохранить' },
  popupProfileSelector
);
profilePopup.setEventListeners();

//Открывает попап редактирования профиля
function openPopupProfile() {
  //присвоить текущие ззачения имени и профессии
  const data = userInfo.getUserInfo();
  profileNameInfo.value = data.name;
  profileProfessionInfo.value = data.about;
  // обновить состояние кнопки и сбросить ошибки для формы
  profileFormValidator.resetValidation();
  profilePopup.open();
}

//Section вставит в разметку список карточек 
const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(
      createNewCard(item)
      );
    },
  }, cardsListSelector);

// Передадим список селекторов попара, данные карты
const imagePopup = new PopupWithImage(
objPopupList, objPopupImageInfo);
imagePopup.setEventListeners();
//создадим попап подтверждения
const popupWithConfirmation = new PopupWithConfirmation(
objPopupList,
  {
    handleSubmitForm: function handleSubmitFormFunction() { 
      popupWithConfirmation.loader(objPopupList.popupSubmitSelector, true);
      return api
        .deleteCard(this.cardId)
        .then(() => {
          this.card.trashCard();
          popupWithConfirmation.close(); 
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() => {
          popupWithConfirmation.loader(objPopupList.popupSubmitSelector, false);
        });
    }
  },
  { loadText: 'Удаление...', defaultText: 'Да' },
  buttonConfirmation, popupConfirmationSelector
);
popupWithConfirmation.setEventListeners();

function createNewCard(item) {
  const card = new Card(
    objCardList, 
    item,
    {
      handleImageClick: function handleImageClickFunction() {
        imagePopup.open(item);
      },
      handleLikeClick: function handleLikeClickFunction() {
        if ( this.likeButtonElement
            .classList
            .contains(this.likeButtonActiveClass) ) {
          return api
            .dislikeCard(this.cardId)
            .then((data) => {
              card.toggleLikeCard(data);
            })
            .catch((err) => {
              console.log(err); // выведем ошибку в консоль
            });
        } else {
          return api
            .likeCard(this.cardId)
            .then((data) => {
              card.toggleLikeCard(data);
            })
            .catch((err) => {
              console.log(err); // выведем ошибку в консоль
            });
        }
      },
      handleTrashClick: function handleTrashClickFunction () {
        popupWithConfirmation.open(
          this.cardId, card
          );
      }
    },
    { userId: userInfo.getUserId() },
    templateCardSelector
  );

  const cardElement = card.createCard();
  return cardElement;
}

// ПОПАП ДОБАВЛЕНИЯ КАРТЫ
//запустить валидацию
const addCardFormValidator = new FormValidator(objValidationList, formAddCard);
addCardFormValidator.enableValidation();

//создать попап
const addCardPopup = new PopupWithForm(
  objPopupList,
  {
    handleSubmitForm: function handleSubmitFormFunction(data) {
      addCardPopup.loader(objPopupList.popupSubmitSelector, true);
      return api
        .addCard(data)
        .then((data) => {
          cardsList.addItem(createNewCard(data));
          addCardPopup.close();
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() => {
          addCardPopup.loader(objPopupList.popupSubmitSelector, false);
        });
      }
  },
  { loadText: 'Создание...', defaultText: 'Создать' },
  popupAddCardSelector
);
addCardPopup.setEventListeners();

//Открывает попап добавления карт
function openPopupAddCard() {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
}

// ПОПАП ОБНОВИТЬ АВАТАР
//запустить валидацию
const avatarFormValidator = new FormValidator(objValidationList, formAvatar);
avatarFormValidator.enableValidation();

//создать попап
const avatarPopup = new PopupWithForm(
  objPopupList,
  {
    handleSubmitForm: function handleSubmitFormFunction(avatar){
      avatarPopup.loader(objPopupList.popupSubmitSelector, true);
      return api
        .changeAvatar(avatar.avatarLink)
        .then((dataLink) => {
          userInfo.setUserAvatar(avatar.avatarLink);
          avatarPopup.close();
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() => {
          avatarPopup.loader(objPopupList.popupSubmitSelector, false);
        });
    },},
    { loadText: 'Сохранение...', defaultText: 'Сохранить' },
    popupAvatarSelector
  );
avatarPopup.setEventListeners();
//Открывает попап аватар
function openPopupAvatar() {
  avatarFormValidator.resetValidation();
  avatarPopup.open();
}
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
const userId = '';
//создать экземпляр данных профиля
const userInfo = new UserInfo(objProfileInfo);
//[взять пользователя, взять карты]
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cardItems]) => {
    userInfo.setUserId(user._id); //запомнить ИД
    userInfo.setUserInfo(user); //установить имя и описание
    userInfo.setUserAvatar(user.avatar); //установить аватар
    const userId = userInfo.getUserId();
    cardsList.renderItems(cardItems, userId); //отрисовать карты

  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

  //Section вставит в разметку список карточек 
  const cardsList = new Section({
    renderer: (item) => {
      cardsList.addItem(createNewCard(item));
      },
    }, cardsListSelector);

// Передадим список селекторов попара, данные карты
const popupWithImage = new PopupWithImage(
  // {
  // popupCloseButtonSelector: objPopupList.popupCloseButtonSelector,
  // popupOpenedSelector: objPopupList.popupOpenedSelector
  // },
  objPopupList, objPopupImageInfo);
popupWithImage.setEventListeners();
//создадим попап подтверждения
const popupWithConfirmation = new PopupWithConfirmation(
  objPopupList,
    {
      handleSubmitForm: function handleSubmitFormFunction() {
        // userInfo.setUserInfo(cardId, cardElement);
        this._cardElement.trashCard();
        popupWithConfirmation.close();
      }
    },
    buttonConfirmation, popupConfirmationSelector
);
popupWithConfirmation.setEventListeners();

function createNewCard(item) {


  // В карточку передаем селекторы, уникальные данные, экземпляр и обработчик открытия картинки, селектор шаблона карты
  const card = new Card({
    handleTrashClick: function  ()  {
      popupWithConfirmation.open(this._element);}
  },
    objCardList, item, {
    handleCardClick: function handleCardClickFunction()  {
      popupWithImage.open(item);
    }
   }, templateCardSelector);
  const cardElement = card.createCard();
  return cardElement;
}


// слушатели кнопок открытия попапов
buttonProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', openPopupAddCard);
buttonAvatar.addEventListener('click', openPopupAvatar);

// ПОПАП ПРОФИЛЯ
//запустить валидацию
const profileFormValidator = new FormValidator(objValidationList, formProfile);
profileFormValidator.enableValidation();
//создать попап
const profilePopupWithForm = new PopupWithForm(
  objPopupList,
  {
    handleSubmitForm: (newUserData) => {
      profilePopupWithForm.loader(true);
      return api
        .changeUserInfo(newUserData)
        .then(() => {
          userInfo.setUserInfo(newUserData);;
          profilePopupWithForm.close();
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() => {
          profilePopupWithForm.loader(false);
        });
    }
  },
  popupProfileSelector
);
profilePopupWithForm.setEventListeners();

//Открывает попап редактирования профиля
function openPopupProfile() {
  //присвоить текущие ззачения имени и профессии
  const data = userInfo.getUserInfo();
  profileNameInfo.value = data.name;
  profileProfessionInfo.value = data.about;
  // обновить состояние кнопки и сбросить ошибки для формы
  profileFormValidator.resetValidation();
  profilePopupWithForm.open();
}



// ПОПАП ДОБАВЛЕНИЯ КАРТЫ
//запустить валидацию
const addCardFormValidator = new FormValidator(objValidationList, formAddCard);
addCardFormValidator.enableValidation();

//Открывает попап добавления карт
function openPopupAddCard() {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

//создать попап
const addCardPopupWithForm = new PopupWithForm(
  objPopupList,
  {
     funcCreateNewCard: createNewCard,
    // сабмит добавит карту и очистит форму
    handleSubmitForm: (newCardData) => {
      cardsList.addItem(createNewCard({
        name: newCardData.imageTitle,
        link: newCardData.imageLink
      }));
      addCardPopupWithForm.close();
    },
  },
  popupAddCardSelector
);
addCardPopupWithForm.setEventListeners();

// ПОПАП ОБНОВИТЬ АВАТАР
//запустить валидацию
const avatarFormValidator = new FormValidator(objValidationList, formAvatar);
avatarFormValidator.enableValidation();

//Открывает попап аватар
function openPopupAvatar() {
  avatarFormValidator.resetValidation();
  console.log("avatarPopupWithForm");
  avatarPopupWithForm.open();
}
//создать попап
const avatarPopupWithForm = new PopupWithForm(
  objPopupList,
  {
    handleSubmitForm: (evt) => {
      evt.preventDefault();
      avatarPopupWithForm.loader(true);
      const ava = avatarForm.getInputValues().avatar;
      return api
        .changeAvatar(ava)
        .then((data) => {
          userData.setUserAva(data.avatar);

          avatarForm.close();
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() => {
          avatarForm.loader(false);
      });
    },
    popupAvatarSelector
  },);
avatarPopupWithForm.setEventListeners();

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
  popupConfirmation, // селектор попапа подтверждение
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

api.getUserInfo();


const deleteCardConfirm = new PopupWithConfirmation(
  objPopupList,
  {  handleSubmitForm: (cardId, cardEl) => {
      deleteCardConfirm.loader(true);
      api
        .deleteCard(cardId)
        .then(() => {
          cardEl.deleteCard();
          deleteCardConfirm.close();
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() => {
          deleteCardConfirm.loader(false);
        });
  } },
  { buttonConfirmation: buttonConfirmation, 
    popupConfirmation: popupConfirmation }
);


// Передадим список селекторов попара, данные карты
const popupWithImage = new PopupWithImage(
  // {
  // popupCloseButtonSelector: objPopupList.popupCloseButtonSelector,
  // popupOpenedSelector: objPopupList.popupOpenedSelector
  // },
  objPopupList, objPopupImageInfo);
popupWithImage.setEventListeners();

function createNewCard(item) {
  // В карточку передаем селекторы, уникальные данные, экземпляр и обработчик открытия картинки, селектор шаблона карты
  const card = new Card(objCardList, item, {
    handleCardClick: function handleCardClickFunction()  {
      popupWithImage.open(item);
    }
   }, templateCardSelector);
  const cardElement = card.createCard();
  return cardElement;
}
//Section вставит в разметку список карточек 
const cardsList = new Section({
  data: initialCards, //предзагрузка карт
  //Создание экземпляров карточек и их вставку в разметку передаем в конструктор класса Section, как функцию-колбэк
  renderer: (item) => { //значение item передается внутри класса при вызове
    cardsList.addItem(createNewCard(item));
    },
  }, cardsListSelector);
cardsList.renderItems(); // отрисовка карточек

//создать экземпляр данных профиля
const userInfo = new UserInfo(objProfileInfo);

// слушатели кнопок открытия попапов
buttonProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', openPopupAddCard);
buttonAvatar.addEventListener('click', openPopupAvatar);

// ПОПАП ПРОФИЛЯ
//запустить валидацию
const profileFormValidator = new FormValidator(objValidationList, formProfile);
profileFormValidator.enableValidation();

//Открывает попап редактирования профиля
function openPopupProfile() {
  //присвоить текущие ззачения имени и профессии
  const data = userInfo.getUserInfo();
  profileNameInfo.value = data.name;
  profileProfessionInfo.value = data.profession;
  // обновить состояние кнопки и сбросить ошибки для формы
  profileFormValidator.resetValidation();
  profilePopupWithForm.open();
}

//создать попап
const profilePopupWithForm = new PopupWithForm(
  objPopupList,
  {
    handleSubmitForm: (newUserData) => {
      userInfo.setUserInfo(newUserData);
      profilePopupWithForm.close();
    }
  },
  popupProfileSelector
);
profilePopupWithForm.setEventListeners();

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
     funcCreateNewCard: createNewCard,
    // сабмит добавит карту и очистит форму
    handleSubmitForm: (linkData) => {
      // userInfo.setUserInfo(newUserData);

      // cardsList.addItem(createNewCard({
      //   name: '',
      //   link: linkData.imageLink
      // }));
      avatarPopupWithForm.close();
    },
  },
  popupAvatarSelector
);
avatarPopupWithForm.setEventListeners();

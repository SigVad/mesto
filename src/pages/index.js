// подключаем стили для сборки
import './index.css';
// вгружаем классы
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
// вгружаем используемые константы для классов
import {
  // кнопки главной страницы
  buttonProfile, 
  buttonAddCard,
  // данные профиля
  objProfileInfo,
  // карты на главной странице
  cardsListSelector,// контейнер для вставки карт (элементов разметки)
  objCardList, // Список селекторов элементов карты
  templateCardSelector, // селектор шаблона карты
  initialCards, // массив карт для предзагрузки
  // Список селекторов для валидации
  objValidationList, 
  // Список селекторов попапов
  objPopupList,
  // попап профиль
  popupProfileSelector, // селектор попапа профиля
  formProfileSelector, // селектор формы профиля
  formProfile, // форма попапа
  profileNameInfo, // поле ввода имени
  profileProfessionInfo, // поле ввода профессии
  // попап добавить карту
  popupAddCardSelector, // селектор попапа
  formAddCardSelector, // селектор формы профиля
  formAddCard, // форма попапа
  newCardName, // поле ввода названия
  newCardLink, // поле ввода ссылки
  // попап просмотр картинки
  objPopupImageInfo // Список селекторов попапа картинка
} from '../utils/constants.js';

//ОСНОВНОЕ ОКНО
// Добавим экземпляр класса открытия картинки
// Передадим список селекторов попара, данные карты
const popupWithImage = new PopupWithImage({
  popupCloseButtonSelector: objPopupList.popupCloseButtonSelector,
  popupOpenedSelector: objPopupList.popupOpenedSelector
  },
  objPopupImageInfo);

function createNewCard(item) {
  
  // В карточку передаем селекторы элементов карты, уникальные данные, экземпляр и обработчик открытия картинки, селектор шаблона карты
  const card = new Card(objCardList, item, { popupWithImage,
    handleCardClick: function handleCardClickFunction()  {
      // передадим данные карты в попап картинки
      this._popupWithImage.open(item);
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

// ПОПАП ПРОФИЛЯ
//запустить валидацию
const profileFormValidator = new FormValidator(objValidationList, formProfileSelector);
profileFormValidator.enableValidation();

//создать попап
const profilePopupWithForm = new PopupWithForm(
  objPopupList,
  {
    handleSubmitForm: (evt) => {
      evt.preventDefault();
    },
  },
  popupProfileSelector
);

// кнопка сохранения
function savePopup(evt) {
  // отменить выполнение действия по-умолчанию
    evt.preventDefault();
    const data = {
      name: profileNameInfo.value,
      profession: profileProfessionInfo.value
    };
    userInfo.setUserInfo(data);
    profilePopupWithForm.close();
  }

//Открывает попап редактирования профиля
function openPopupProfile() {
  //присвоить текущие ззачения имени и профессии
  const data = userInfo.getUserInfo();
  profileNameInfo.value = data.name;
  profileProfessionInfo.value = data.profession;
  // обновить состояние кнопки и сбросить ошибки для формы
  profileFormValidator.toggleButtonState();
  profileFormValidator.hideFormError();
  profilePopupWithForm.open();
}
// слушатель сабмита
formProfile.addEventListener('submit', savePopup);

// ПОПАП ДОБАВЛЕНИЯ КАРТЫ
//запустить валидацию
const AddCardFormValidator = new FormValidator(objValidationList, formAddCardSelector);
AddCardFormValidator.enableValidation();
//создать попап
const addCardPopupWithForm = new PopupWithForm(
  objPopupList,
  {
    handleSubmitForm: (evt) => {
      evt.preventDefault();
      // const formValue = popupCardForm._getInputValues();
    },
  },
  popupAddCardSelector
);

//Открывает попап добавления карт
function openPopupAddCard() {
  // обновить статус кнопки и сбросить ошибки для формы
  AddCardFormValidator.toggleButtonState();
  AddCardFormValidator.hideFormError();
  addCardPopupWithForm.open();
}
//функция добавить карту и очистить форму
function addCard(evt)  {
  evt.preventDefault();
  const item = {
    name: newCardName.value,
    link: newCardLink.value
  };
  // addObjCard(item);
  cardsList.addItem(createNewCard(item));
  addCardPopupWithForm.close();
 }
// слушатель сабмита
formAddCard.addEventListener('submit', addCard);
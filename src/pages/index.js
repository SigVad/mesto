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
  buttonProfile, // кнопка Открыть профиль
  buttonAddCard, // кнопка Открыть добавление карты
  objProfileInfo,   // данные профиля
  cardsListSelector,// контейнер для вставки карт (элементов разметки)
  objCardList, // Список селекторов элементов карты
  templateCardSelector, // селектор шаблона карты
  initialCards, // массив карт для предзагрузки
  objValidationList, // Список селекторов для валидации
  objPopupList,   // Список селекторов попапов
  popupProfileSelector, // селектор попапа профиля
  formProfileSelector, // селектор формы профиля
  formProfile, // форма попапа
  profileNameInfo, // поле ввода имени
  profileProfessionInfo, // поле ввода профессии
  popupAddCardSelector, // селектор попапа добавления карты
  formAddCardSelector, // селектор формы профиля
  formAddCard, // форма попапа
  newCardName, // поле ввода названия
  newCardLink, // поле ввода ссылки
  objPopupImageInfo // Список селекторов попапа картинка
} from '../utils/constants.js';

//ОСНОВНОЕ ОКНО
// Передадим список селекторов попара, данные карты
const popupWithImage = new PopupWithImage({
  popupCloseButtonSelector: objPopupList.popupCloseButtonSelector,
  popupOpenedSelector: objPopupList.popupOpenedSelector
  },
  objPopupImageInfo);
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
   // кнопка сохранения &&&&&
    // handleSubmitForm: function handleSubmitFormFunction(evt) {
    handleSubmitForm: () => {
      const data = profilePopupWithForm._getInputValues();
      userInfo.setUserInfo(data);
      profilePopupWithForm.close();
    },
  },
  popupProfileSelector
);
profilePopupWithForm.setEventListeners();






// ПОПАП ДОБАВЛЕНИЯ КАРТЫ
//запустить валидацию
const AddCardFormValidator = new FormValidator(objValidationList, formAddCard);
AddCardFormValidator.enableValidation();

//Открывает попап добавления карт
function openPopupAddCard() {
  AddCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
}

//создать попап
const addCardPopupWithForm = new PopupWithForm(
  objPopupList,
  {
     funcCreateNewCard: createNewCard,
    // сабмит добавит карту и очистит форму
    handleSubmitForm: () => {
      const data = addCardPopupWithForm._getInputValues();
      cardsList.addItem(createNewCard({
        name: data.imageTitle,
        link: data.imageLink
      }));
      addCardPopupWithForm.close();
    },
  },
  popupAddCardSelector
);
addCardPopupWithForm.setEventListeners();
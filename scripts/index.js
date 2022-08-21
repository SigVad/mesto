// вгружаем классы
import Section from './components/Section.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from './components/UserInfo.js';
// вгружаем используемые константы для классов
import {objCardList, initialCards} from './utils/constants.js';
import {objValidationList} from './utils/constants.js';
// вгружаем попапы
import {popupProfile, formProfile, profileNameInfo, profileProfessionInfo} from './utils/constants.js';
import {popupAddCard, formAddCard, newCardName, newCardLink} from './utils/constants.js';
// вгружаем имя, профессию из главной страницы
import {profileName, profileProfession, buttonProfile, buttonAddCard} from './utils/constants.js';
// вгружаем список карточек, чтобы заполнить по шаблону
const cardsListSelector = '.elements__list';
//создать массив форм
const formList = Array.from(document.querySelectorAll(objValidationList.formSelector));
//создать объект экземпляров класса валидации форм, чтобы обращаться к конкретному экземпляру

//ОСНОВНОЕ ОКНО
function createNewCard(item) {
  // Добавим экземпляр класса открытия картинки
  const popupWithImage = new PopupWithImage(item, '.popup_type_image');
  // В карточку передаем данные, экземпляр и обработчик открытия картинки, селектор карты
  const card = new Card(item, { popupWithImage,
    handleCardClick: function handleCardClickFunction()  {
      this._popupWithImage.open();
    }
   }, objCardList.templateSelector);
  
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
const userInfo = new UserInfo({ 
  profileNameSelector: '.profile__name', 
  profileJobSelector: '.profile__profession' 
});

// слушатели кнопок открытия попапов
buttonProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', openPopupAddCard);


// ПОПАП ПРОФИЛЯ
//запустить валидацию
const profileFormValidator = new FormValidator(objValidationList, '.popup__form_profile');
profileFormValidator.enableValidation();


//создать попап
const profilePopupWithForm = new PopupWithForm(
  {
    handleSubmitForm: (evt) => {
      evt.preventDefault();
    },
  },
  '.popup_type_edit'
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
const AddCardFormValidator = new FormValidator(objValidationList, '.popup__form_add-card');
AddCardFormValidator.enableValidation();
//создать попап
const addCardPopupWithForm = new PopupWithForm(
  {
    handleSubmitForm: (evt) => {
      evt.preventDefault();
      // const formValue = popupCardForm._getInputValues();
    },
  },
  '.popup_type_card'
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
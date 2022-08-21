// вгружаем классы
import Section from "./components/Section.js";
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
// import PopupWithForm from "./components/PopupWithForm.js";
// вгружаем используемые константы для классов
import {objCardList, initialCards} from './utils/constCard.js';
import {objValidationList} from './utils/constFormValidator.js';
// вгружаем попапы
import {popupProfile, formProfile, profileNameInfo, profileProfessionInfo} from './utils/constPopupProfile.js';
import {popupAddCard, formAddCard, newCardName, newCardLink} from './utils/constPopupAddCard.js';
// вгружаем имя, профессию из главной страницы
import {profileName, profileProfession, buttonProfile, buttonAddCard} from './utils/constants.js';
// вгружаем список карточек, чтобы заполнить по шаблону
const cardsListSelector = '.elements__list';
//создать массив форм
const formList = Array.from(document.querySelectorAll(objValidationList.formSelector));
//создать объект экземпляров класса валидации форм, чтобы обращаться к конкретному экземпляру
const formListObj = {}; 
//

//Обойти массив, для каждой формы запустить валидацию
formList.forEach((formElement) => {
  const validator = new FormValidator(objValidationList, formElement);
  formListObj[`${formElement.name}`] = validator;
  validator.enableValidation();
});

//Section вставит в разметку список карточек 
const cardsList = new Section({
  data: initialCards, //предзагрузка карт
  //Создание экземпляров карточек и их вставку в разметку передаем в конструктор класса Section, как функцию-колбэк
  renderer: (item) => { //значение item передается внутри класса при вызове
    const card = new Card(item, objCardList.templateSelector);
    const cardElement = card.createCard();
    cardsList.addItem(cardElement);
    },
  }, cardsListSelector);
  
cardsList.renderItems(); // отрисовка карточек




// const popupProfile = new PopupWithForm(
//   {
//     handleSubmitForm: (evt) => {
//       evt.preventDefault();
//       const user = popupProfile.getInputValues();
//     },
//   },
//   profilePopup
// );

// кнопка сохранения
function savePopup(evt) {
  // отменить выполнение действия по-умолчанию
    evt.preventDefault();
    profileName.textContent =  profileNameInfo.value;
    profileProfession.textContent = profileProfessionInfo.value;
    closePopup(popupProfile);
  }
//Открывает попап редактирования профиля
function openPopupProfile() {
  //присвоить текущие ззачения имени и профессии
  profileNameInfo.value = profileName.textContent;
  profileProfessionInfo.value = profileProfession.textContent;
  // проверить состояние кнопки
  formListObj.formProfile.toggleButtonState();
  // принудительно сбросить ошибки для формы
  formListObj.formProfile.hideFormError();
  openPopup(popupProfile);
}



// const popupCard = new PopupWithForm(
//   {
//     handleSubmitForm: (evt) => {
//       evt.preventDefault();
      
//       const formValue = popupCard.getInputValues();
//     },
//   },
//   cardPopup
// );

//Открывает попап добавления карт
function openPopupAddCard() {
  formListObj.formAddCard.toggleButtonState();
  openPopup(popupAddCard);
}
//функция добавить карту и очистить форму
function addCard(evt)  {
  evt.preventDefault();
  const item = {
    name: newCardName.value,
    link: newCardLink.value
  };
  // addObjCard(item);
  const card = new Card(item, objCardList.templateSelector);
  const cardElement = card.createCard();
  cardsList.addItem(cardElement);
  // cardsList.renderItems();
  formAddCard.reset();
  closePopup(popupAddCard);
 }



// слушатели открывашки
buttonProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', openPopupAddCard);
// слушатели форм заполнения профиля и добавления карты
formProfile.addEventListener('submit', savePopup);
formAddCard.addEventListener('submit', addCard);
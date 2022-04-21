// извлекаем попап-элемент, кнопки редактировать, сохранить, закрыть
const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
// извлекаем ввод имени, профессии
const formInput = popupElement.querySelector('.edit-popup__form');
const profileNameInput = formInput.querySelector('.edit-popup__input_js_name');
const profileProfessionInput = formInput.querySelector('.edit-popup__input_js_profession');
// извлекаем имя, профессию
const profileElement = document.querySelector('.profile');
const editButton = profileElement.querySelector('.profile__edit-button');
const profileName = profileElement.querySelector('.profile__name');
const profileProfession = profileElement.querySelector('.profile__profession');
//код клавиши Esc, Enter для наглядности
//const ESC_KEY_CODE = 27;
//const ENTER_KEY_CODE = 13;

//функции открыть и закрыть попап
function openPopup() {
  //добавить класс в список классов элемента popup_opened
  popupElement.classList.add('popup_opened');
  //присвоить текущие ззачения имени и профессии
  profileNameInput.value = profileName.textContent;
  profileProfessionInput.value = profileProfession.textContent;
  //обработчик закрытия на Esc
  //document.addEventListener('keyup', onDocumentKeyUp)
  
}
// кнопка сохранения не работает
function savePopup(evt) {
  evt.preventDefault();
  profileName.textContent =  profileNameInput.value;
  profileProfession.textContent = profileProfessionInput.value;
  closePopup();
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
  //document.removeEventListener('keyup', onDocumentKeyUp)
}
// function onDocumentKeyUp(event){
//   if (event.keyCode === ESC_KEY_CODE){closePopup()}
//   if (event.keyCode === ENTER_KEY_CODE){savePopup()}}

//слушатели события нажатий на кнопки
editButton.addEventListener('click', openPopup);
formInput.addEventListener('submit', savePopup);
closeButton.addEventListener('click', closePopup);
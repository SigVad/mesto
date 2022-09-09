import Popup from "./Popup.js";

// Для каждого попапа с формой
export default class PopupWithForm extends Popup {
  constructor({
      popupCloseButtonSelector,
      popupOpenedSelector,
      popupInputSelector,
      popupFormSelector
      },
      { handleSubmitForm }, 
      popupSelector) {
    super({ popupCloseButtonSelector, popupOpenedSelector }, popupSelector);
    this._handleSubmitForm = handleSubmitForm; //колбек обработчик
    this._inputs = this._popup.querySelectorAll(popupInputSelector);
    this._form = this._popup.querySelector(popupFormSelector);
    this._popupSelector = popupSelector;
 }
  // Приватный метод собирает данные всех полей формы
  _getInputValues(){
    // console.log('this');
    this._inputsValue = {};
    this._inputs.forEach((input) => {
      this._inputsValue[input.name] = input.value;
    });
    return this._inputsValue;
  }
  // перезаписанный метод
  
  setEventListeners(){
    //добавить обработчик сабмита формы
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm();
    });
    super.setEventListeners();
  }
  // Публичный перезаписанный метод
  close() {
    //сбросить форму
    this._form.reset();
    super.close();
  }
}
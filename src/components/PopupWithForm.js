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
 }
  // Приватный метод собирает данные всех полей формы
  _getInputValues(){
    this._inputsValue = {};
    this._inputs.forEach((input) => {
      this._inputsValue[input.name] = input.value;
    });
    return this._inputsValue;
  }
  // Публичный перезаписанный метод
  setEventListeners(){
    //добавить обработчик сабмита формы
    this._popup.addEventListener("submit", this._handleSubmitForm);
    super.setEventListeners();
  }
  _removeEventListeners() {
    this._popup.removeEventListener("submit", this._handleSubmitForm);
    super._removeEventListeners();
  }
  // Публичный перезаписанный метод
  close() {
    //сбросить форму
    this._form.reset();
    super.close();
  }
}
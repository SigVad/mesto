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
    this._i = 0;
 }
  // Приватный метод собирает данные всех полей формы
  _getInputValues(){
    this._inputsValue = {};
    this._inputs.forEach((input) => {
      this._inputsValue[input.name] = input.value;
    });
    return this._inputsValue;
  }
  // перезаписанный метод
  setEventListeners(){
    //добавить обработчик сабмита формы
    this._form.addEventListener("submit", this._handleSubmitForm.bind(this));
    this._i = this._i + 1;
    console.log(`${this._i} слушатель submit на ${this._popupSelector}`);
    super.setEventListeners();
  }
  // _removeEventListeners() {
  //   this._form.removeEventListener("submit", this._handleSubmitForm.bind(this));
  //   super._removeEventListeners();
  // }
  // Публичный перезаписанный метод
  close() {
    //сбросить форму
    this._form.reset();
    super.close();
  }
}
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
      { loadText, defaultText },
      popupSelector) {
    super(
      { popupCloseButtonSelector, popupOpenedSelector },
      { loadText, defaultText }, popupSelector );
    this._handleSubmitForm = handleSubmitForm; //колбек обработчик
    this._inputs = this._popup.querySelectorAll(popupInputSelector);
    this._form = this._popup.querySelector(popupFormSelector);
    this._popupSelector = popupSelector;
  }
  _getInputValues(){
    this._inputsValue = {};
    this._inputs.forEach((input) => {
      this._inputsValue[input.name] = input.value;
    });
    return this._inputsValue;
  }
  setEventListeners(){
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm( this._getInputValues() );
    });
    super.setEventListeners();
  }
  close() {
    //сбросить форму
    this._form.reset();
    super.close();
  }



  // ВМЕСТО openPopupProfile
  // Можно сделать метод  setInputValues в классе PopupWithForm, который будет вставлять данные в инпуты:
  // setInputValues(data) {
  //   this._inputList.forEach((input) => {
  //     // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
  //     input.value = data[input.name];
  //   });
  // }
  // И не нужно будет искать эти инпуты в index.js и что-то вставлять в них при открытии профиля. 
}
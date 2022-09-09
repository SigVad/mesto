import Popup from "./Popup.js";

//попап Подтвердить удаление карты
//Ему можно назначить обработчик сабмита, чтобы установить id карточки.
export default class PopupWithConfirmation extends Popup{
  constructor(
      { popupCloseButtonSelector, popupOpenedSelector },
      { handleSubmitForm },
      buttonConfirmation, popupSelector
      ){
    super({ popupCloseButtonSelector, popupOpenedSelector }, popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._buttonConfirmation = buttonConfirmation;
  }
  setEventListeners() {
    this._buttonConfirmation.addEventListener('click', this._handleSubmitForm.bind(this));
    // this._buttonConfirmation.addEventListener('click', () => {
    //   // evt.preventDefault();
    //   console.log('ура');
    //   // this._handleSubmitForm(this.cardId, this.cardElement);
    //   // this._handleSubmitForm();
    // });
    super.setEventListeners();
    super._eventListenerToEscape();
  }
  // open(id, element) {
  //   this.cardId = id;
  //   this.cardElement = element;
  //   super.open();
  // }
  open(element) {
    this._cardElement = element;
    super.open();
  }
}
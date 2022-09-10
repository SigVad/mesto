import Popup from "./Popup.js";

//попап Подтвердить удаление карты
export default class PopupWithConfirmation extends Popup{
  constructor(
      { popupCloseButtonSelector, popupOpenedSelector,
      popupFormSelector },
      { handleSubmitForm },
      { loadText, defaultText },
      buttonConfirmation, popupSelector
      ){
    super(
      { popupCloseButtonSelector, popupOpenedSelector },
      { loadText, defaultText }, popupSelector );
    this._handleSubmitForm = handleSubmitForm;
    this._buttonConfirmation = buttonConfirmation;
    this._form = this._popup.querySelector(popupFormSelector); 
  }
  setEventListeners(){
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm();
    });
    super.setEventListeners();
  }
  open(cardId, card) {
    this.cardId = cardId;
    this.card = card;
    super.open();
  }
}
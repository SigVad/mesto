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
    super.setEventListeners();
    super._eventListenerToEscape();
  }
  _removeEventListeners() {
    this._buttonConfirmation.removeEventListener('click', this._handleSubmitForm.bind(this));
    super._removeEventListeners();
  }
  open(cardId, cardElement, card) {
    this._cardId = cardId;
    this._element = cardElement;
    this._card = card;
    super.open();
  }
}
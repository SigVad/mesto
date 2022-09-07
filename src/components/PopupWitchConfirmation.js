import Popup from "./Popup.js";

//попап Подтвердить удаление карты
//Ему можно назначить обработчик сабмита, чтобы установить id карточки.
export default class PopupWithConfirmation extends Popup{
  constructor(
      { popupCloseButtonSelector, popupOpenedSelector },
      { handleSubmitForm },
      { buttonConfirmation, popupSelector }
      ){
    super({ popupCloseButtonSelector, popupOpenedSelector }, popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._buttonConfirmation = buttonConfirmation;
  }
  setEventListeners() {
    this._buttonConfirmation.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this.cardId, this.cardElement);
    });
    super._setEventListeners();
  }
  open(id, element) {
    this.cardId = id;
    this.cardElement = element;
    super.open();
  }
}
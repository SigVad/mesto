export default class Popup {
  constructor({ popupCloseButtonSelector, popupOpenedSelector}, popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButtonSelector = popupCloseButtonSelector;
    this._popupOpenedSelector = popupOpenedSelector;
  }
  // Публичный метод открыть
  open() {
    this._popup.classList.add(this._popupOpenedSelector);
    this.setEventListeners();
  }
  // Публичный метод закрыть
  close() {
    this._popup.classList.remove(this._popupOpenedSelector);
    this._removeEventListeners();
  }
  // Приватный метод закрыть по Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape'){
      this.close();
    }
  }
  // Приватный метод закрыть по клику на Х и на фон
  _clickToExit = (evt) => {
    if ((evt.target.classList.contains(this._popupSelector)) || 
    (evt.target.classList.contains(this._popupCloseButtonSelector))) {
      this.close();
    }
  }
  // Публичный метод добавить слушатели
  setEventListeners() {
    this._popup.addEventListener('click', this._clickToExit);
    document.addEventListener('keyup', this._handleEscClose); 
  }
  // Публичный метод убрать слушатели
  _removeEventListeners() {
    this._popup.removeEventListener('click', this._clickToExit);
    document.removeEventListener('keyup', this._handleEscClose);
  }
}

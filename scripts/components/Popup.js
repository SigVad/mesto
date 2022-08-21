export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  // Публичный метод открыть
  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }
  // Публичный метод закрыть
  close() {
    this._popup.classList.remove('popup_opened');
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
    if ((evt.target.classList.contains('popup'))||(evt.target.classList.contains('popup__close-button'))) {
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

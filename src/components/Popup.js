export default class Popup {
  constructor({ popupCloseButtonSelector, popupOpenedSelector}, popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButtonSelector = popupCloseButtonSelector;
    this._popupOpenedSelector = popupOpenedSelector;
    this._popupSelector = popupSelector;
    this._j = 0;
  }
  // Публичный метод открыть
  open() {
    this._popup.classList.add(this._popupOpenedSelector);
  }
  // Публичный метод закрыть
  close() {
    this._popup.classList.remove(this._popupOpenedSelector);
  }
  // Приватный метод закрыть по Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape'){
      this.close();
    }
  }
  // Приватный метод закрыть по клику на Х и на фон
  _clickToExit = (evt) => {
    if ((evt.target.classList.contains(this._popupOpenedSelector)) || 
    (evt.target.classList.contains(this._popupCloseButtonSelector))) {
      this.close();
    }
  }
  // метод добавить слушатели
  setEventListeners() {
    this._j = this._j + 1;
    console.log(`${this._j} слушатель clickToExit на ${this._popupSelector}`);
    console.log(`${this._j} слушатель handleEscClose на ${this._popupSelector}`);
    this._popup.addEventListener('click', this._clickToExit);
    document.addEventListener('keyup', this._handleEscClose); 
  }
}

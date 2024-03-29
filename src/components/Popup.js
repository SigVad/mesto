export default class Popup {
  constructor({ popupCloseButtonSelector, popupOpenedSelector}, { loadText, defaultText }, popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButtonSelector = popupCloseButtonSelector;
    this._popupOpenedSelector = popupOpenedSelector;
    this._popupSelector = popupSelector;
    this._loadText = loadText; //"Сохранение..."
    this._defaultText = defaultText; //"Сохранить"
  }
  // Публичный метод открыть
  open() {
    this._popup.classList.add(this._popupOpenedSelector);
    this._eventListenerToEscape();
  }
  // Публичный метод закрыть
  close() {
    this._popup.classList.remove(this.  _popupOpenedSelector);
    this._removeEventListenerToEscape();
  }
  loader(popupSubmitSelector, isload) {
    const popupSubmitElement = this._popup.querySelector(popupSubmitSelector);
    (isload) ? (popupSubmitElement.textContent = this._loadText) : (popupSubmitElement.textContent = this._defaultText);
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
    this._popup.addEventListener('click', this._clickToExit);
  }
  _eventListenerToEscape() {
    document.addEventListener('keyup', this._handleEscClose); 
  }
  _removeEventListenerToEscape() {
    document.removeEventListener('keyup', this._handleEscClose); 
  }
}

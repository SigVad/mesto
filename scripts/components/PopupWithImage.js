import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({
      popupCloseButtonSelector, popupOpenedSelector
      }, { 
      popupImageSelector, imageSelector, captionSelector 
      }, 
      { link, name }) {
    super({ popupCloseButtonSelector, popupOpenedSelector }, popupImageSelector);
    this._imageSrc = this._popup.querySelector(imageSelector);
    this._imageCaption = this._popup.querySelector(captionSelector);
    this._link = link;
    this._name = name;

  }
  //Публичный перезаписанный метод
  open() {
    //Вставить в попап картинку с src изображения и подписью к картинке
    this._imageSrc.src = this._link;
    this._imageSrc.alt = this._name;
    this._imageCaption.textContent = this._name;
    super.open();
  }
}

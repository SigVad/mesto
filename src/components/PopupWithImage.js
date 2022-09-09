import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({
      popupCloseButtonSelector, popupOpenedSelector
      }, { 
      popupImageSelector, imageSelector, captionSelector 
      }) {
    super({ popupCloseButtonSelector, popupOpenedSelector }, popupImageSelector);
        
    this._imageSrc = this._popup.querySelector(imageSelector);
    this._imageCaption = this._popup.querySelector(captionSelector);
  }
  //Публичный перезаписанный метод
  open({ link, name }) {
    //Вставить в попап картинку с src изображения и подписью к картинке
    this._imageSrc.src = link;
    this._imageSrc.alt = name;
    this._imageCaption.textContent = name;
    super.open();
  }
}

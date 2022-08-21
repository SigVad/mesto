import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ link, name }, popupSelector) {
    super(popupSelector);
    this._link = link;
    this._name = name;
    this._imageSrc = this._popup.querySelector('.popup__image');
    this._imageCaption = this._popup.querySelector('.popup__image-caption');

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

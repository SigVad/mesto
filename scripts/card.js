
import openPopup from './index.js';

const cardsTemplate = document.querySelector('#cards-template');
const popupImage = document.querySelector('.popup_type_image');
const imageSrc = popupImage.querySelector('.popup__image');
const imageCaption = popupImage.querySelector('.popup__image-caption');

export default class Card {
  constructor(link, name, templateSelector) {
    this._tSelector = templateSelector;
    this._link = link;
    this._name = name;
  }
  // приватный метод делает разметку
  // забираем разметку из HTML и клонируем элемент
  _getTemplate() {
    // найдёт template-элемент с классом card-template, извлечёт его содержимое,
    // в содержимом найдёт элемент с классом card, клонирует его
    const cardElement = cardsTemplate.content
                        .querySelector(this._tSelector).cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }
  //публичный метод добавления карты на страницу по шаблону (ссылка, название)
  createCard() {//
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    // Добавим слушатели
    this._setEventListeners();
    this._cardImage = this._element.querySelector('.element__image')
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    // Вернём элемент наружу
    return this._element;
  }
  //метод добавления слушателей
  _setEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.element__trash-button').addEventListener('click', () => {
      this._handleTrashClick();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopupImage();
    });
  }
  _handleLikeClick() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }
  _handleTrashClick() {
    //убрать разметку
    this._element.remove();
    //занулить текущий объект
    this._element = null;
  }
  _handleOpenPopupImage() {
    imageSrc.src = this._link;
    imageSrc.alt = this._name;
    imageCaption.textContent = this._name;
    openPopup(popupImage);
  }
}
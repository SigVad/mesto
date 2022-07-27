
import {openPopup, cardsList, popupImage, imageSrc, imageCaption, cardsTemplate} from './index.js';

export default class Card {
  constructor(link, name, templateSelector) {
    this._tSelector = templateSelector;
    this._link = link;
    this._name = name;
  }
  // публичная функция отрисовки карты (ссылка, название)
  renderCard(){
    cardsList.prepend(this._createCard());
  }
  // приватный метод делает разметку
  // забираем разметку из HTML и клонируем элемент
  _getTemplate() {
    // найдёт template-элемент с классом card-template, извлечёт его содержимое,
    // в содержимом найдёт элемент с классом card, клонирует его
    const cardElement = cardsTemplate.content.querySelector(this._tSelector).cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }
  //функция добавления карты на страницу по шаблону (ссылка, название)
  _createCard() {//
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    // Добавим слушатели
    this._setEventListeners();
    const cardImage = this._element.querySelector('.element__image');
    // Добавим данные
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    // Вернём элемент наружу
    return this._element;
  }

  _setEventListeners() {
    //слушатель лайка
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._handleLikeClick();
    });
    //слушатель удаления
    this._element.querySelector('.element__trash-button').addEventListener('click', () => {
      this._handleTrashClick();
    });
    //слушатель просмотра
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopupImage();
    });
  }

  _handleLikeClick() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }
  _handleTrashClick() {
    this._element.remove();
  }
  _handleOpenPopupImage() {
    imageSrc.src = this._link;
    imageSrc.alt = this._name;
    imageCaption.textContent = this._name;
    openPopup(popupImage);
  }
}
import {objCardList} from '../utils/constants.js';

export default class Card {
  constructor({ link, name }, { popupWithImage,
    handleCardClick }, templateSelector) {
    this._link = link;
    this._name = name;
    this._popupWithImage = popupWithImage;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }
  // приватный метод делает разметку
  // забираем разметку из HTML и клонируем элемент
  _getTemplate() {
    // найдёт template-элемент с классом card-template, извлечёт его содержимое,
    // в содержимом найдёт элемент с классом card, клонирует его
    const cardsTemplate = document.querySelector(this._templateSelector);
    const cardElement = cardsTemplate.content
                        .querySelector(objCardList.cardClass).cloneNode(true);
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
    this._cardImage = this._element.querySelector(objCardList.imageClass)
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(objCardList.titleClass).textContent = this._name;
    // Вернём элемент наружу
    return this._element;
  }
  //метод добавления слушателей
  _setEventListeners() {
    this._element.querySelector(objCardList.likeButtonClass).addEventListener('click', this._handleLikeClick.bind(this));
    this._element.querySelector(objCardList.trashButtonClass).addEventListener('click', this._handleTrashClick.bind(this));

    this._element.querySelector(objCardList.imageClass).addEventListener('click', this._handleCardClick.bind(this));
  }
  _handleLikeClick() {
    this._element.querySelector(objCardList.likeButtonClass)
      .classList
      .toggle(objCardList.likeButtonActiveClass);
  }
  _handleTrashClick() {
    //убрать разметку
    this._element.remove();
    //занулить текущий объект
    this._element = null; 
  }
}
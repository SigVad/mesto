export default class Card {
  constructor(
      // селекторы элементов карты
      { cardClass, imageClass, titleClass, likeButtonClass, trashButtonClass, likeButtonActiveClass }, 
      // уникальные данные карты
      { link, name }, 
      // экземпляр и обработчик открытия картинки
      { popupWithImage, handleCardClick }, 
      // селектор шаблона карты
      templateSelector) {
    // селекторы элементов карты
    this._cardClass = cardClass;
    this._imageClass = imageClass;
    this._titleClass = titleClass;
    this._likeButtonClass = likeButtonClass;
    this._trashButtonClass = trashButtonClass;
    this._likeButtonActiveClass = likeButtonActiveClass; 
    // уникальные данные карты
    this._link = link;
    this._name = name;
    // экземпляр и обработчик открытия картинки
    this._popupWithImage = popupWithImage;
    this._handleCardClick = handleCardClick;
    // селектор шаблона карты
    this._templateSelector = templateSelector;
  }
  // приватный метод делает разметку
  // забираем разметку из HTML и клонируем элемент
  _getTemplate() {
    // найдёт template-элемент с классом card-template, извлечёт его содержимое,
    // в содержимом найдёт элемент с классом card, клонирует его
    const cardsTemplate = document.querySelector(this._templateSelector);
    const cardElement = cardsTemplate.content
                        .querySelector(this._cardClass).cloneNode(true);
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
    this._cardImage = this._element.querySelector(this._imageClass)
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(this._titleClass).textContent = this._name;
    // Вернём элемент наружу
    return this._element;
  }
  //метод добавления слушателей
  _setEventListeners() {
    this._element.querySelector(this._likeButtonClass).addEventListener('click', this._handleLikeClick.bind(this));
    this._element.querySelector(this._trashButtonClass).addEventListener('click', this._handleTrashClick.bind(this));

    this._element.querySelector(this._imageClass).addEventListener('click', this._handleCardClick.bind(this));
  }
  _handleLikeClick() {
    this._element.querySelector(this._likeButtonClass)
      .classList
      .toggle(this._likeButtonActiveClass);
  }
  _handleTrashClick() {
    //убрать разметку
    this._element.remove();
    //занулить текущий объект
    this._element = null; 
  }
}
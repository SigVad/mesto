export default class Card {
  constructor(
    //колбек удаления карты вызывает подтверждение
    { handleTrashClick },
      // селекторы элементов карты
      { cardClass, imageClass, titleClass, likeButtonClass, trashButtonClass, likeButtonActiveClass }, 
      // уникальные данные карты
      { link, name }, 
      // экземпляр и обработчик открытия картинки
      { handleCardClick }, 
      // селектор шаблона карты
      templateSelector) {
    //колбеки
    this._handleTrashClick = handleTrashClick;
    this._handleCardClick = handleCardClick;
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
    // шаблон карты
    this._cardsTemplate =  document.querySelector(templateSelector);
  }
  // приватный метод делает разметку
  // забираем разметку из HTML и клонируем элемент
  _getTemplate() {
    this._element = this._cardsTemplate.content
      .querySelector(this._cardClass).cloneNode(true);
  }
  //публичный метод добавления карты на страницу по шаблону (ссылка, название)
  createCard() {
    this._getTemplate();
    this._cardImage = this._element.querySelector(this._imageClass);
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(this._titleClass).textContent = this._name;
    // Добавим слушатели
    this._setEventListeners();
    // Вернём элемент наружу
    return this._element;
  }
  //метод добавления слушателей
  _setEventListeners() {
    this._likeButtonElement = this._element.querySelector(this._likeButtonClass);
    this._likeButtonElement.addEventListener('click', this._handleLikeClick.bind(this));
    this._element.querySelector(this._trashButtonClass).addEventListener('click', this._handleTrashClick.bind(this));
    this._cardImage.addEventListener('click', this._handleCardClick.bind(this));
  }
  _handleLikeClick() {
    this._likeButtonElement.classList.toggle(this._likeButtonActiveClass);
  }
  trashCard() {
    this._element.closest(".element").remove();
  }
}
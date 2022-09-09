export default class Card {
  constructor(
      // селекторы элементов карты
      { cardClass, imageClass, titleClass, likeButtonClass, trashButtonClass, likeButtonActiveClass, amountLikeClass }, 
      // уникальные данные карты
      { likes, _id, name, link,  owner, createdAt }, 
      // экземпляр и обработчик открытия картинки
      { handleImageClick, handleLikeClick, handleTrashClick }, 
      // селектор шаблона карты
      { userId },
      templateSelector ) {
    //колбеки
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleTrashClick = handleTrashClick;
    // селекторы элементов карты
    this._cardClass = cardClass;
    this._imageClass = imageClass;
    this._titleClass = titleClass;
    this._likeButtonClass = likeButtonClass;
    this._trashButtonClass = trashButtonClass;
    this._likeButtonActiveClass = likeButtonActiveClass; 
    this._amountLikeClass = amountLikeClass;
    // уникальные данные карты
    this._likes = likes
    this._cardId = _id
    this._name = name;
    this._link = link;
    this._userId = userId;
    this._createdAt = createdAt
    // шаблон карты
    this._cardsTemplateElement =  document.querySelector(templateSelector);

      
  }
  // приватный метод делает разметку
  // забираем разметку из HTML и клонируем элемент
  _getTemplate() {
    this._element = this._cardsTemplateElement
      .content
      .querySelector(this._cardClass)
      .cloneNode(true);
  }
  //публичный метод добавления карты на страницу по шаблону (ссылка, название)
  createCard() {
    this._getTemplate();
    this._cardImage = this._element.querySelector(this._imageClass);
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(this._titleClass).textContent = this._name;
    this._amountLike = this._element.querySelector(this._amountLikeClass);
    this._amountLike.textContent = this._likes.length;
    this._likeButtonElement = this._element.querySelector(this._likeButtonClass);
  // отрисуем мой лайк, если он есть

    if(this._likes.some(like => like._id == this._userId)){
      this._likeButtonElement.classList.add(this._likeButtonActiveClass);
    };
    // Добавим слушатели
    this._setEventListeners();

    if (this.id == this._cardId) {
      this._trashButton.hidden = false;
    };
    // Вернём элемент наружу
    return this._element;
  }

  toggleLikeCard(data) {
    this._amountLike.textContent = data.likes.length;
    this._likeButtonElement.classList.toggle(this._likeButtonActiveClass);
  }

  trashCard() {
    this._element.closest(this._cardClass).remove();
  }


  _setEventListeners() {
    this._cardImage
      .addEventListener( 'click',
        this._handleImageClick.bind(this)
      );
    this._likeButtonElement
      .addEventListener( 'click',
        this._handleLikeClick
        // ( this._likeButtonElement, this._cardId )
        .bind(this)
      );
    this._element.querySelector(this._trashButtonClass)
      .addEventListener( 'click',
        this._handleTrashClick
        // ( this._cardId )
        .bind(this)
      );
  }
}
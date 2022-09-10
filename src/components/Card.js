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
    this.likeButtonActiveClass = likeButtonActiveClass; //используется в index.js
    this._amountLikeClass = amountLikeClass;
    // уникальные данные карты
    this._likes = likes;
    this.cardId = _id; //используется в index.js
    this._name = name;
    this._link = link;
    this._userId = userId;
    this._ownerId = owner._id;
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
    //используется в index.js
    this.likeButtonElement = this._element.querySelector(this._likeButtonClass);

    // отрисуем мой лайк, если он есть
    if(this._likes.some(like => like._id == this._userId)){
      this.likeButtonElement.classList.add(this.likeButtonActiveClass);
    };
    // Добавим слушатели
    this._setEventListeners();

    if (this._userId != this._ownerId) {
      this._trashButtonElement.style.visibility = "hidden";
    };
    // Вернём элемент наружу
    return this._element;
  }

  toggleLikeCard(data) {
    this._amountLike.textContent = data.likes.length;
    this.likeButtonElement.classList.toggle(this.likeButtonActiveClass);
  }

  trashCard() {
    this._element.remove();
    //занулить текущий объект
    this._element = null; 
  }

  _setEventListeners() {
    this._cardImage
      .addEventListener( 'click',
        this._handleImageClick.bind(this)
      );
    this.likeButtonElement
      .addEventListener( 'click',
        this._handleLikeClick
        .bind(this)
      );
      this._trashButtonElement = this._element.querySelector(this._trashButtonClass);
      this._trashButtonElement.addEventListener( 'click',
        this._handleTrashClick.bind(this)
      );
  }
}
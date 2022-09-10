//Перебор массива и отрисовка разметки на его основе
export default class Section {
  // containerSelector - селектор контейнера, в который нужно добавлять созданные элементы.
  constructor({renderer}, containerSelector) {
    this._renderer = renderer; 
    //контейнер для вставки элементов разметки
    this._container = document.querySelector(containerSelector);
  }
  renderItems(cardItems) {
    cardItems.forEach((card) => {
      this._renderer(card);
    });
  }
  // публич. метод принимает DOM-элемент и добавляет его в контейнер.
  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}

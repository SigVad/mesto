//Перебор массива и отрисовка разметки на его основе
export default class Section {
  
  // containerSelector - селектор контейнера, в который нужно добавлять созданные элементы.
  constructor({data, renderer}, containerSelector) {
    this._renderedItems = data; //массив с данными карточек
    this._renderer = renderer; //инструкция
    //контейнер для вставки элементов разметки
    this._container = document.querySelector(containerSelector);
  }
  // публич. метод отвечает за отрисовку всех элементов
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item); //item.name, item.link
    });
  }
  // публич. метод принимает DOM-элемент и добавляет его в контейнер.
  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}

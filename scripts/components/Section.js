//Перебор массива и отрисовка разметки на его основе
//Section -  класс без обработчиков событий. Управляет разметкой других классов, вставляя её в DOM. У класса нет свойств, которые хранят его разметку 
export default class Section {
  
  // containerSelector - селектор контейнера, в который нужно добавлять созданные элементы.
  constructor({data, renderer}, containerSelector) {
    this._renderedItems = data; //массив с данными карточек
    this._renderer = renderer; //инструкция
    //контейнер для вставки элементов разметки
    this._container = document.querySelector(containerSelector);
    console.log(this._renderer);
  }
  // публич. метод отвечает за отрисовку всех элементов
  //перебирает массив данных _initialArray. Вызывает для каждого элемента массива 
  //функцию, которая подберёт нужный шаблон отрисовки и вызовет для него метод setItem
  renderItems() {
    //console.log('renderItems');
    this._renderedItems.forEach((item) => {
      this._renderer(item); //item.name, item.link
    });
  }
  // публич. метод принимает DOM-элемент и добавляет его в контейнер.
  addItem(cardElement) {
    //console.log('addItem');
    this._container.prepend(cardElement);
  }
}

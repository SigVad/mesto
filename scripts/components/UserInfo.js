// управление отображением информации о пользователе на странице
export default class UserInfo {
  //Принимает в конструктор объект с селекторами элемента имени пользователя и элемента информации о себе.
  constructor({ profileNameSelector, profileJobSelector}){
    this._profileNameElement = document.querySelector(profileNameSelector);
    console.log(this._profileNameElement);
    this._profileJobElement = document.querySelector(profileJobSelector);
  }
    // Публичный метод принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, profession }) {
      this._profileNameElement.textContent = name;
      this._profileJobElement.textContent = profession;
    }
  // Публичный метод возвращает объект с данными пользователя
  //пригодится когда данные пользователя нужно будет подставить в форму при открытии.
  getUserInfo() {
    const data = {
      name: this._profileNameElement.textContent,
      profession: this._profileJobElement.textContent
    };
    return data;
  }
}
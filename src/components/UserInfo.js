// управление отображением информации о пользователе на странице
export default class UserInfo {
  //Принимает в конструктор объект с селекторами элемента имени пользователя и элемента информации о себе.
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector}){
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileJobElement = document.querySelector(profileJobSelector);
    this._profileAvatarElement = document.querySelector(profileAvatarSelector);
  }
    // Публичный метод принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, about }) {
    //this._profileAvatarElement.src = `https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg`;
    this._profileNameElement.textContent = name;
    this._profileJobElement.textContent = about;
  }
  // Публичный метод меняет аватар
  setUserAvatar(avatar) {
    this._profileAvatarElement.src = avatar;
  }

  setUserId(_id) {
    this._userId = _id;
  }
  getUserId() {
    return this._userId;
  }

  // Публичный метод возвращает объект с данными пользователя
  getUserInfo() {
    const userInfo = {
      name: this._profileNameElement.textContent,
      about: this._profileJobElement.textContent
    };
    return userInfo;
  }
}
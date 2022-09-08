// управление отображением информации о пользователе на странице
export default class UserInfo {
  //Принимает в конструктор объект с селекторами элемента имени пользователя и элемента информации о себе.
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector}){
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileJobElement = document.querySelector(profileJobSelector);
    this._profileAvatarElement = document.querySelector(profileAvatarSelector);
  }
    // Публичный метод принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, profession }) {
      this._profileNameElement.textContent = name;
      this._profileJobElement.textContent = profession;
    }
  // Публичный метод возвращает объект с данными пользователя
  getUserInfo() {
    const userInfo = {
      name: this._profileNameElement.textContent,
      profession: this._profileJobElement.textContent
    };
    return userInfo;
  }
  // Публичный метод меняет аватар
  setUserAvatar({avatarLink}) {
    this._profileAvatarElement.src = avatarLink;
  }
  // Публичный метод 
  setUserId(userId) {
    this._userId = userId;
  }
  getUserId() {
    return this._userId;
  }
}
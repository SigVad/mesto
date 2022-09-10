//В классе описаны запросы к серверу

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  
  _checkAnswer = (res) => {//проверить ответ
    if (res.ok) {
      // console.log(`ОТВЕТ: ${res}`);
      return res.json();
    }
  }
  _errorAnswer= (err) => {//если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${err.status}`);
  }

  getInitialCards() {//запроcить список карт
    // console.log(`getInitialCards (запроcить список карт)`);
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(this._checkAnswer)
      .catch(this._errorAnswer);
  }

  getUserInfo() {//запроcить инф. пользователя
    // console.log(`getUserInfo (запроcить инф. пользователя)`);
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
    .then(this._checkAnswer)
    .catch(this._errorAnswer);
  }

  changeAvatar(link) {//изменить аватар
    // console.log(`changeAvatar (изменить аватар)`);
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then(this._checkAnswer)
      .catch(this._errorAnswer);
  }

  changeUserInfo(user) {//изменить информацию пользователя
    // console.log(`changeUserInfo (изменить инф. пользователя)`);
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",//частичное обновление ресурса
      headers: this._headers,
      body: JSON.stringify({
        name: user.name,
        about: user.about,
      }),
    })
      .then(this._checkAnswer)
      .catch(this._errorAnswer);
  }

  addCard(value) {//отправить новую карту
    // console.log(`addCard (отправить новую карту)`);
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(value),
    })
      .then(this._checkAnswer)
      .catch(this._errorAnswer);
  }

  likeCard(cardId) {//отправить лайк
    // console.log(`likeCard (отправить лайк)`);
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",//заменить ресурс полностью
      headers: this._headers,
    })
      .then(this._checkAnswer)
      .catch(this._errorAnswer);
  }

  dislikeCard(cardId) {//удаление лайка
    // console.log(`dislikeCard (удаление лайка)`);
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkAnswer)
      .catch(this._errorAnswer);
  }
  
  deleteCard(cardId) {//удаление карты, исп в обработчике сабмита подтверждения
    // console.log(`deleteCard (удаление карты)`);
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkAnswer)
      .catch(this._errorAnswer);
  }
}

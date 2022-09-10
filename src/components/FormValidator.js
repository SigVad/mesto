export default class FormValidator {
  constructor(objValidationList, formElement) {
    // принято на вход
    this._formSelector = objValidationList.formSelector;
    this._inputSelector = objValidationList.inputSelector;
    this._submitButtonSelector = objValidationList.submitButtonSelector;
    this._inactiveButtonClass = objValidationList.inactiveButtonClass;
    this._inputErrorClass = objValidationList.inputErrorClass;
    this._errorClass = objValidationList.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }
  enableValidation() {
    this._setEventListeners();
  }
  // Публичный метод перезапуска валидации
  resetValidation() {
    // обновить состояние кнопки и сбросить ошибки для формы
    this._toggleButtonState();
    this._hideFormError();
  }
  //метод добавляет полям формы обработчики событий и контролирует состояние кнопки отправки
  _setEventListeners() {
    this._toggleButtonState();
    // Обойдём все поля формы, каждому полю добавим слушатель с обработчиком события input 
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidate(inputElement);
        this._toggleButtonState();
      });
    });
  }
  //метод отрисовки кнопки Отправить принимает массив полей ввода и элемент кнопки
  _toggleButtonState() {
    // Если есть хотя бы один невалидный инпут, не активна
    if(this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }
  // Метод проверяет наличие невалидного поля 
  _hasInvalidInput() {
    //some перебирает значения valid у списка, пока не встретит невалидное
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  // Метод проверяет валидность поля принимает элемент формы и поле ввода
  _checkInputValidate(inputElement) {
    // Если поле не проходит валидацию, покажем ошибку
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  // Метод удаляет элемент ошибки. принимает элемент формы и поле ввода
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
  // Метод показывает элемент ошибки. принимает элемент формы, поле ввода и текст ошибки
  _showInputError(inputElement) {
    // Находим элемент ошибки
    const errorMessage = inputElement.validationMessage;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }
  // метод принудительно сбрасывает ошибки для формы
  _hideFormError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }
}
export default class FormValidator {
  constructor(objValidationList, formElement) {
    this._formSelector = objValidationList.formSelector;
    this._inputSelector = objValidationList.inputSelector;
    this._submitButtonSelector = objValidationList.submitButtonSelector;
    this._inactiveButtonClass = objValidationList.inactiveButtonClass;
    this._inputErrorClass = objValidationList.inputErrorClass;
    this._errorClass = objValidationList.errorClass;
    this._formElement = formElement;
    // this._formList = Array.from(document.querySelectorAll(this._formSelector));
  }
  // Публичный метод проверки валидации
  enableValidation() {
    //добавить слушатель и обработчик
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
  //метод добавляет полям формы обработчики событий и контролирует состояние кнопки отправки
  _setEventListeners() {
    // Найдём все поля формы и сделаем из них массив
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    // Обойдём все поля формы, каждому полю добавим слушатель с обработчиком события input 
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidate(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
  //Метод отрисовки кнопки Отправить принимает массив полей ввода и элемент кнопки
  _toggleButtonState(inputList, buttonElement) {
    // Если есть хотя бы один невалидный инпут, не активна
    if(this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
  // Метод проверяет наличие невалидного поля 
  _hasInvalidInput(inputList) {
    //some перебирает значения valid у списка, пока не встретит невалидное
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  // Метод проверяет валидность поля принимает элемент формы и поле ввода
  _checkInputValidate(inputElement) {
    // Если поле не проходит валидацию, покажем ошибку
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
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
  _showInputError(inputElement, errorMessage) {
    // Находим элемент ошибки
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }
  // Публичный метод принудительно сбрасывает ошибки для формы
  hideFormError() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }
}











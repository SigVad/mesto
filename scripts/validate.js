//Функция сбрасывает ошибки для формы
const hideFormError = (formElement, selectorsObject) => {
  const inputList = Array.from(formElement.querySelectorAll(selectorsObject.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, selectorsObject)
  });
}

//Функция показывает элемент ошибки. принимает элемент формы, поле ввода и текст ошибки
const showInputError = (formElement, inputElement, errorMessage, selectorsObject) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(selectorsObject.inputErrorClass);
  errorElement.classList.add(selectorsObject.errorClass);
  errorElement.textContent = errorMessage;
}
//Функция удаляет элемент ошибки. принимает элемент формы и поле ввода
const hideInputError = (formElement, inputElement, selectorsObject) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(selectorsObject.inputErrorClass);
  errorElement.classList.remove(selectorsObject.errorClass);
  errorElement.textContent = '';
}
//Функция проверяет валидность поля
// принимает элемент формы и поле ввода
const checkInputValidate = (formElement, inputElement, selectorsObject) => {
  // Если поле не проходит валидацию, покажем ошибку
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectorsObject);
  } else {
    hideInputError(formElement, inputElement, selectorsObject);
  }
}
//проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита. 
// принимает массив полей ввода
const hasInvalidInput = (inputList) => {
	//some перебирает значения valid у списка. Если поле не валидно, колбэк вернёт true и обход прекратится
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
// отрисовка состояния кнопки Отправить (активна, не активна). 
// принимает массив полей ввода и элемент кнопки
const toggleButtonState = (inputList, buttonElement, selectorsObject) => {
	// Если есть хотя бы один невалидный инпут, не активна
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectorsObject.inactiveButtonClass);//
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(selectorsObject.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}
//Функция добавляет полям формы обработчики событий и контролирует состояние кнопки отправки
// принимает элемент формы и добавит её полям нужные обработчики:
const setEventListeners = (formElement, selectorsObject) => {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll(selectorsObject.inputSelector));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(selectorsObject.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, selectorsObject);
  // Обойдём все поля формы, каждому полю добавим слушатель с обработчиком события input 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidate(formElement, inputElement, selectorsObject);
      toggleButtonState(inputList, buttonElement, selectorsObject);
    });
  });
}
//функция проверки валидации
const enableValidation = (selectorsObject) => {
  //console.log('запуск проверки валидации');
  //  массив всех элементов в DOM с классом .form
  // Array.from создаёт новый массив на основе массивоподобного объекта.
  const formList = Array.from(document.querySelectorAll(selectorsObject.formSelector));
  //Обойти массив, для каждой формы добавить слушатель и обработчик
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, selectorsObject);
  })
}
//вызов функции проверки валидации
enableValidation(objValidationList);
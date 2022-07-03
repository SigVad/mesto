//Функция показывает элемент ошибки
// принимает элемент формы, поле ввода и текст ошибки
const showInputError = (formElement, inputElement, errorMessage, preventClass) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`${inputElement.id}-error`);
  inputElement.classList.add(preventClass.inputErrorClass); //стиль поля ввода с ошибкой
  errorElement.classList.add(preventClass.errorClass);  //стиль описания ошибки
  errorElement.textContent = errorMessage; //текст ошибки
}
//Функция удаляет элемент ошибки
// принимает элемент формы и поле ввода
const hideInputError = (formElement, inputElement, preventClass) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`${inputElement.id}-error`);
  inputElement.classList.remove(preventClass.inputErrorClass);
  errorElement.classList.remove(preventClass.errorClass);
  errorElement.textContent = '';
}
//Функция проверяет валидность поля
// принимает элемент формы и поле ввода
const checkInputValidate = (formElement, inputElement, preventClass) => {
  // Если поле не проходит валидацию, покажем ошибку
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, preventClass);
  } else {
    hideInputError(formElement, inputElement, preventClass);
  }
}
//проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита. 
// принимает массив полей ввода
const hasInvalidInput = (inputList) => {
	//some перебирает значения valid у списка 
  return inputList.some((inputElement) => {
	  // Если поле не валидно, колбэк вернёт true и Обход массива прекратится
    return !inputElement.validity.valid;
  });
}
// отрисовка состояния кнопки Отправить (активна, не активна). 
// принимает массив полей ввода и элемент кнопки
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
	// Если есть хотя бы один невалидный инпут, не активна
  if(hasInvalidInput(inputList)) {
    buttonElement.classlist.add(inactiveButtonClass);
    buttonElement.disabled = True;
  } else {
    buttonElement.classlist.remove(inactiveButtonClass);
    buttonElement.disabled = False;
  }
}
//Функция добаляет полям формы обработчики событий и контролирует состояние кнопки отправки
// принимает элемент формы и добавит её полям нужные обработчики:
const setEventListeners = (formElement, preventClass) => {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll(preventClass.inputSelector));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(preventClass.submitButtonSelector);
  // Вызовем отрисовку состояния кнопки, чтобы не ждать ввода данных в поля (передадим ей массив полей и кнопку)
  toggleButtonState(inputList, buttonElement, preventClass.inactiveButtonClass);

  // Обойдём все поля формы, каждому полю добавим слушатель с обработчиком события input 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidate(formElement, inputElement, preventClass);
      // Вызовем отрисовку состояния кнопки после изменения значения в поле ввода
      toggleButtonState(inputList, buttonElement, preventClass.inactiveButtonClass);
    });
  });
}
//функция проверки валидации
const enableValidation = (preventClass) => {
  //  массив всех элементов в DOM с классом .form
  // Array.from создаёт новый массив на основе массивоподобного объекта.
  const formList = Array.from(document.querySelectorAll(preventClass.formSelector));
  //Обойти массив 
  formList.forEach((formElement) => {
    //добавить слушатель для каждой формы
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменить стандартное поведение
      evt.preventDefault();
    });


    // const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    // fieldsetList.forEach((fieldSet) => {
    //   setEventListeners(fieldSet);
    // });


    setEventListeners(formElement, preventClass);
  })
}
// включение валидации вызовом enableValidation
const preventClass = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
enableValidation(preventClass); 
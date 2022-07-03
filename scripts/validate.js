//Функция показывает элемент ошибки
// принимает элемент формы, поле ввода и текст ошибки
const showInputError = (formElement, inputElement, errorMessage, mass) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(mass.inputErrorClass); //стиль поля ввода с ошибкой
  errorElement.classList.add(mass.errorClass);  //стиль описания ошибки
  errorElement.textContent = errorMessage; //текст ошибки
}
//Функция удаляет элемент ошибки
// принимает элемент формы и поле ввода
const hideInputError = (formElement, inputElement, mass) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(mass.inputErrorClass);
  errorElement.classList.remove(mass.errorClass);
  errorElement.textContent = '';
}
//Функция проверяет валидность поля
// принимает элемент формы и поле ввода
const checkInputValidate = (formElement, inputElement, mass) => {
  // Если поле не проходит валидацию, покажем ошибку
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, mass);
    console.log(`добавить элемент ошибки для поля ${inputElement.name}`);
  } else {
    hideInputError(formElement, inputElement, mass);
    console.log(`скрыть элемент ошибки для поля ${inputElement.name}`);
  }
}
//проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита. 
// принимает массив полей ввода
const hasInvalidInput = (inputList) => {
  console.log('проверить наличие невалидных полей');
	//some перебирает значения valid у списка 
  return inputList.some((inputElement) => {
	  // Если поле не валидно, колбэк вернёт true и Обход массива прекратится
    return !inputElement.validity.valid;
  });
}
// отрисовка состояния кнопки Отправить (активна, не активна). 
// принимает массив полей ввода и элемент кнопки
const toggleButtonState = (inputList, buttonElement, mass) => {
  console.log('отрисовать состояние кнопки');
	// Если есть хотя бы один невалидный инпут, не активна
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(mass.inactiveButtonClass);//
    buttonElement.disabled = true;
    console.log('кнопка не активна');
  } else {
    buttonElement.classList.remove(mass.inactiveButtonClass);
    buttonElement.disabled = false;
    console.log('кнопка активна');

  }
}
//Функция добавляет полям формы обработчики событий и контролирует состояние кнопки отправки
// принимает элемент формы и добавит её полям нужные обработчики:
const setEventListeners = (formElement, mass) => {
  console.log(`добавить полям формы ${formElement.name} обработчики событий`);
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll(mass.inputSelector));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(mass.submitButtonSelector);
  // Вызовем отрисовку состояния кнопки, чтобы не ждать ввода данных в поля (передадим ей массив полей и кнопку)
  toggleButtonState(inputList, buttonElement, mass);

  // Обойдём все поля формы, каждому полю добавим слушатель с обработчиком события input 
  inputList.forEach((inputElement) => {
    let i=0;
    inputElement.addEventListener('input', () => {
      console.log(`счетчик для ${inputElement.name} = ${i+=1}`);
      checkInputValidate(formElement, inputElement, mass);
      // Вызовем отрисовку состояния кнопки после изменения значения в поле ввода
      toggleButtonState(inputList, buttonElement, mass);
    });
    formElement.reset();
  });
}
//функция проверки валидации
const enableValidation = (mass) => {
  console.log('запуск проверки валидации');
  //  массив всех элементов в DOM с классом .form
  // Array.from создаёт новый массив на основе массивоподобного объекта.
  const formList = Array.from(document.querySelectorAll(mass.formSelector));
  //Обойти массив 
  formList.forEach((formElement) => {
    //добавить слушатель для каждой формы
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменить стандартное поведение
      evt.preventDefault();
    });
    
  setEventListeners(formElement, mass);
  })
}
//вызов функции проверки валидации
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
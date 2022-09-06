(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){var i=t.cardClass,l=t.imageClass,s=t.titleClass,a=t.likeButtonClass,u=t.trashButtonClass,c=t.likeButtonActiveClass,p=n.link,f=n.name,h=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardClass=i,this._imageClass=l,this._titleClass=s,this._likeButtonClass=a,this._trashButtonClass=u,this._likeButtonActiveClass=c,this._link=p,this._name=f,this._handleCardClick=h,this._cardsTemplate=document.querySelector(o)}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){this._element=this._cardsTemplate.content.querySelector(this._cardClass).cloneNode(!0)}},{key:"createCard",value:function(){return this._getTemplate(),this._cardImage=this._element.querySelector(this._imageClass),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(this._titleClass).textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){this._likeButtonElement=this._element.querySelector(this._likeButtonClass),this._likeButtonElement.addEventListener("click",this._handleLikeClick.bind(this)),this._element.querySelector(this._trashButtonClass).addEventListener("click",this._handleTrashClick.bind(this)),this._cardImage.addEventListener("click",this._handleCardClick.bind(this))}},{key:"_handleLikeClick",value:function(){this._likeButtonElement.classList.toggle(this._likeButtonActiveClass)}},{key:"_handleTrashClick",value:function(){this._element.remove(),this._element=null}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){this._toggleButtonState(),this._hideFormError()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidate(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidate",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e){var t=e.validationMessage,n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideFormError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n){var r=this,o=t.popupCloseButtonSelector,i=t.popupOpenedSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),s(this,"_clickToExit",(function(e){(e.target.classList.contains(r._popupOpenedSelector)||e.target.classList.contains(r._popupCloseButtonSelector))&&r.close()})),this._popup=document.querySelector(n),this._popupCloseButtonSelector=o,this._popupOpenedSelector=i,this._popupSelector=n}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(this._popupOpenedSelector),this._eventListenerToEscape()}},{key:"close",value:function(){this._popup.classList.remove(this._popupOpenedSelector),this._removeEventListenerToEscape()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._clickToExit)}},{key:"_eventListenerToEscape",value:function(){document.addEventListener("keyup",this._handleEscClose)}},{key:"_removeEventListenerToEscape",value:function(){document.removeEventListener("keyup",this._handleEscClose)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function _(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function l(e,t,n){var r,o=e.popupCloseButtonSelector,s=e.popupOpenedSelector,a=e.popupInputSelector,u=e.popupFormSelector,c=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=i.call(this,{popupCloseButtonSelector:o,popupOpenedSelector:s},n))._handleSubmitForm=c,r._inputs=r._popup.querySelectorAll(a),r._form=r._popup.querySelector(u),r._popupSelector=n,r}return t=l,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsValue={},this._inputs.forEach((function(t){e._inputsValue[t.name]=t.value})),this._inputsValue}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())})),p(d(l.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),p(d(l.prototype),"close",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(a);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function C(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function l(e,t){var n,r=e.popupCloseButtonSelector,o=e.popupOpenedSelector,s=t.popupImageSelector,a=t.imageSelector,u=t.captionSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this,{popupCloseButtonSelector:r,popupOpenedSelector:o},s))._imageSrc=n._popup.querySelector(a),n._imageCaption=n._popup.querySelector(u),n}return t=l,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._imageSrc.src=t,this._imageSrc.alt=n,this._imageCaption.textContent=n,b(g(l.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(a);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(n),this._profileJobElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._profileNameElement.textContent=t,this._profileJobElement.textContent=n}},{key:"getUserInfo",value:function(){return{name:this._profileNameElement.textContent,profession:this._profileJobElement.textContent}}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=document.querySelector(".profile"),B=j.querySelector(".profile__edit-button"),L=j.querySelector(".profile__add-button"),P={templateSelector:"#cards-template",cardClass:".element",imageClass:".element__image",titleClass:".element__title",likeButtonClass:".element__like-button",likeButtonActiveClass:"element__like-button_active",trashButtonClass:".element__trash-button"},I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},q={popupCloseButtonSelector:"popup__close-button",popupOpenedSelector:"popup_opened",popupInputSelector:".popup__input",popupFormSelector:".popup__form"},T=".popup_type_edit",x=document.querySelector(T).querySelector(".popup__form_profile"),R=x.querySelector(".popup__input_name"),V=x.querySelector(".popup__input_profession"),F=".popup_type_card",A=document.querySelector(F).querySelector(".popup__form_add-card"),N=new E({popupCloseButtonSelector:q.popupCloseButtonSelector,popupOpenedSelector:q.popupOpenedSelector},{popupImageSelector:".popup_type_image",imageSelector:".popup__image",captionSelector:".popup__image-caption"});function D(e){return new r(P,e,{handleCardClick:function(){N.open(e)}},"#cards-template").createCard()}N.setEventListeners();var J=new t({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){J.addItem(D(e))}},".elements__list");J.renderItems();var U=new w({profileNameSelector:".profile__name",profileJobSelector:".profile__profession"});B.addEventListener("click",(function(){var e=U.getUserInfo();R.value=e.name,V.value=e.profession,z.resetValidation(),M.open()})),L.addEventListener("click",(function(){G.resetValidation(),H.open()}));var z=new i(I,x);z.enableValidation();var M=new y(q,{handleSubmitForm:function(e){U.setUserInfo(e),M.close()}},T);M.setEventListeners();var G=new i(I,A);G.enableValidation();var H=new y(q,{funcCreateNewCard:D,handleSubmitForm:function(e){J.addItem(D({name:e.imageTitle,link:e.imageLink})),H.close()}},F);H.setEventListeners()})();
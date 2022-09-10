(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e){var r=e.baseUrl,o=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_checkAnswer",(function(e){if(e.ok)return e.json()})),t(this,"_errorAnswer",(function(e){return Promise.reject("Ошибка: ".concat(e.status))})),this._baseUrl=r,this._headers=o}var r,o;return r=n,(o=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkAnswer).catch(this._errorAnswer)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkAnswer).catch(this._errorAnswer)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkAnswer).catch(this._errorAnswer)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkAnswer).catch(this._errorAnswer)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkAnswer).catch(this._errorAnswer)}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkAnswer).catch(this._errorAnswer)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkAnswer).catch(this._errorAnswer)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkAnswer).catch(this._errorAnswer)}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n,r){var i=this,a=t.popupCloseButtonSelector,l=t.popupOpenedSelector,s=n.loadText,u=n.defaultText;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_handleEscClose",(function(e){"Escape"===e.key&&i.close()})),o(this,"_clickToExit",(function(e){(e.target.classList.contains(i._popupOpenedSelector)||e.target.classList.contains(i._popupCloseButtonSelector))&&i.close()})),this._popup=document.querySelector(r),this._popupCloseButtonSelector=a,this._popupOpenedSelector=l,this._popupSelector=r,this._loadText=s,this._defaultText=u}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(this._popupOpenedSelector),this._eventListenerToEscape()}},{key:"close",value:function(){this._popup.classList.remove(this._popupOpenedSelector),this._removeEventListenerToEscape()}},{key:"loader",value:function(e,t){this._popup.querySelector(e).textContent=t?this._loadText:this._defaultText}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._clickToExit)}},{key:"_eventListenerToEscape",value:function(){document.addEventListener("keyup",this._handleEscClose)}},{key:"_removeEventListenerToEscape",value:function(){document.removeEventListener("keyup",this._handleEscClose)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t,n,r,o){var l,s=e.popupCloseButtonSelector,u=e.popupOpenedSelector,c=e.popupFormSelector,p=t.handleSubmitForm,f=n.loadText,h=n.defaultText;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(l=i.call(this,{popupCloseButtonSelector:s,popupOpenedSelector:u},{loadText:f,defaultText:h},o))._handleSubmitForm=p,l._buttonConfirmation=r,l._form=l._popup.querySelector(c),l}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm()})),s(f(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e,t,n){this._cardId=e,this._element=t,this._card=n,s(f(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n,r,o,i){var a=t.cardClass,l=t.imageClass,s=t.titleClass,u=t.likeButtonClass,c=t.trashButtonClass,p=t.likeButtonActiveClass,f=t.amountLikeClass,h=n.likes,d=n._id,_=n.name,y=n.link,m=n.owner,b=n.createdAt,v=r.handleImageClick,S=r.handleLikeClick,k=r.handleTrashClick,g=o.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._handleImageClick=v,this._handleLikeClick=S,this._handleTrashClick=k,this._cardClass=a,this._imageClass=l,this._titleClass=s,this._likeButtonClass=u,this._trashButtonClass=c,this._likeButtonActiveClass=p,this._amountLikeClass=f,this._likes=h,this._cardId=d,this._name=_,this._link=y,this._userId=g,this._ownerId=m._id,this._createdAt=b,this._cardsTemplateElement=document.querySelector(i)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){this._element=this._cardsTemplateElement.content.querySelector(this._cardClass).cloneNode(!0)}},{key:"createCard",value:function(){var e=this;return this._getTemplate(),this._cardImage=this._element.querySelector(this._imageClass),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(this._titleClass).textContent=this._name,this._amountLike=this._element.querySelector(this._amountLikeClass),this._amountLike.textContent=this._likes.length,this._likeButtonElement=this._element.querySelector(this._likeButtonClass),this._likes.some((function(t){return t._id==e._userId}))&&this._likeButtonElement.classList.add(this._likeButtonActiveClass),this._setEventListeners(),this._userId!=this._ownerId&&(this._trashButtonElement.style.visibility="hidden"),this._element}},{key:"toggleLikeCard",value:function(e){this._amountLike.textContent=e.likes.length,this._likeButtonElement.classList.toggle(this._likeButtonActiveClass)}},{key:"trashCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){this._cardImage.addEventListener("click",this._handleImageClick.bind(this)),this._likeButtonElement.addEventListener("click",this._handleLikeClick.bind(this)),this._trashButtonElement=this._element.querySelector(this._trashButtonClass),this._trashButtonElement.addEventListener("click",this._handleTrashClick.bind(this))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){this._toggleButtonState(),this._hideFormError()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidate(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidate",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e){var t=e.validationMessage,n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideFormError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t,n,r){var o,l=e.popupCloseButtonSelector,s=e.popupOpenedSelector,u=e.popupInputSelector,c=e.popupFormSelector,p=t.handleSubmitForm,f=n.loadText,h=n.defaultText;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,{popupCloseButtonSelector:l,popupOpenedSelector:s},{loadText:f,defaultText:h},r))._handleSubmitForm=p,o._inputs=o._popup.querySelectorAll(u),o._form=o._popup.querySelector(c),o._popupSelector=r,o}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsValue={},this._inputs.forEach((function(t){e._inputsValue[t.name]=t.value})),this._inputsValue}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())})),g(O(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),g(O(a.prototype),"close",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function A(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n,r=e.popupCloseButtonSelector,o=e.popupOpenedSelector,l=t.popupImageSelector,s=t.imageSelector,u=t.captionSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,{popupCloseButtonSelector:r,popupOpenedSelector:o},{loadText:"",defaultText:""},l))._imageSrc=n._popup.querySelector(s),n._imageCaption=n._popup.querySelector(u),n}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._imageSrc.src=t,this._imageSrc.alt=n,this._imageCaption.textContent=n,j(x(a.prototype),"open",this).call(this)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(n),this._profileJobElement=document.querySelector(r),this._profileAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._profileNameElement.textContent=t,this._profileJobElement.textContent=n}},{key:"setUserAvatar",value:function(e){this._profileAvatarElement.src=e}},{key:"setUserId",value:function(e){this._userId=e}},{key:"getUserId",value:function(){return this._userId}},{key:"getUserInfo",value:function(){return{name:this._profileNameElement.textContent,about:this._profileJobElement.textContent}}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),F=document.querySelector(".profile"),V=F.querySelector(".profile__edit-button"),D=F.querySelector(".profile__add-button"),N=F.querySelector(".profile__avatar-button"),J={templateSelector:"#cards-template",cardClass:".element",imageClass:".element__image",titleClass:".element__title",likeButtonClass:".element__like-button",likeButtonActiveClass:"element__like-button_active",trashButtonClass:".element__trash-button",amountLikeClass:".element__like-number"},H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},M={popupCloseButtonSelector:"popup__close-button",popupSubmitSelector:".popup__button",popupOpenedSelector:"popup_opened",popupInputSelector:".popup__input",popupFormSelector:".popup__form"},z=".popup_type_edit",$=document.querySelector(z).querySelector(".popup__form_profile"),G=$.querySelector(".popup__input_name"),K=$.querySelector(".popup__input_profession"),Q=".popup_type_card",W=document.querySelector(Q).querySelector(".popup__form_add-card"),X=".popup_type_avatar",Y=document.querySelector(X).querySelector(".popup__form_avatar"),Z=".popup_type_confirmation",ee=document.querySelector(Z).querySelector(".popup__button");function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-49",headers:{authorization:"f6d44b42-c81d-4168-83e7-55a4e60ba01f","Content-Type":"application/json"}}),re=new R({profileNameSelector:".profile__name",profileJobSelector:".profile__profession",profileAvatarSelector:".profile__avatar-image"});Promise.all([ne.getUserInfo(),ne.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];re.setUserId(o._id),re.setUserInfo(o),re.setUserAvatar(o.avatar),ae.renderItems(i)})).catch((function(e){console.log(e)})),V.addEventListener("click",(function(){var e=re.getUserInfo();G.value=e.name,K.value=e.about,oe.resetValidation(),ie.open()})),D.addEventListener("click",(function(){ce.resetValidation(),pe.open()})),N.addEventListener("click",(function(){fe.resetValidation(),he.open()}));var oe=new v(H,$);oe.enableValidation();var ie=new L(M,{handleSubmitForm:function(e){return ie.loader(M.popupSubmitSelector,!0),ne.changeUserInfo(e).then((function(){re.setUserInfo(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.loader(M.popupSubmitSelector,!1)}))}},{loadText:"Сохранение...",defaultText:"Сохранить"},z);ie.setEventListeners();var ae=new _({renderer:function(e){ae.addItem(ue(e))}},".elements__list"),le=new q(M,{popupImageSelector:".popup_type_image",imageSelector:".popup__image",captionSelector:".popup__image-caption"});le.setEventListeners();var se=new h(M,{handleSubmitForm:function(){var e=this;return se.loader(M.popupSubmitSelector,!0),ne.deleteCard(this._cardId).then((function(){e._card.trashCard(),se.close()})).catch((function(e){console.log(e)})).finally((function(){se.loader(M.popupSubmitSelector,!1)}))}},{loadText:"Удаление...",defaultText:"Да"},ee,Z);function ue(e){var t=new m(J,e,{handleImageClick:function(){le.open(e)},handleLikeClick:function(){return this._likeButtonElement.classList.contains(this._likeButtonActiveClass)?ne.dislikeCard(this._cardId).then((function(e){t.toggleLikeCard(e)})).catch((function(e){console.log(e)})):ne.likeCard(this._cardId).then((function(e){t.toggleLikeCard(e)})).catch((function(e){console.log(e)}))},handleTrashClick:function(){se.open(this._cardId,this._element,t)}},{userId:re.getUserId()},"#cards-template");return t.createCard()}se.setEventListeners();var ce=new v(H,W);ce.enableValidation();var pe=new L(M,{handleSubmitForm:function(e){return pe.loader(M.popupSubmitSelector,!0),ne.addCard(e).then((function(e){ae.addItem(ue(e)),pe.close()})).catch((function(e){console.log(e)})).finally((function(){pe.loader(M.popupSubmitSelector,!1)}))}},{loadText:"Создание...",defaultText:"Создать"},Q);pe.setEventListeners();var fe=new v(H,Y);fe.enableValidation();var he=new L(M,{handleSubmitForm:function(e){return he.loader(M.popupSubmitSelector,!0),ne.changeAvatar(e.avatarLink).then((function(t){re.setUserAvatar(e.avatarLink),he.close()})).catch((function(e){console.log(e)})).finally((function(){he.loader(M.popupSubmitSelector,!1)}))}},{loadText:"Сохранение...",defaultText:"Сохранить"},X);he.setEventListeners()})();
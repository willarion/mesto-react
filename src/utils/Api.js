import {apiSettings} from './constants'

class Api {
  
  constructor(options, renderError, renderLoading) {
    this._baseUrl = options.baseUrl;
    this._authorization = options.headers.authorization; 
    this._contentType = options.headers["Content-Type"];
    this._renderError = renderError; 
    this._renderLoading = renderLoading;
  }

  _handleOriginalResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization
        }
    })
    .then(this._handleOriginalResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization
        }
    })
    .then(this._handleOriginalResponse);
  }

  // renderInitialPage(setInitialUserInfo, callbackForRenderInitialCards) {
  //   Promise.all([
  //     this.getUserInfo(),
  //     this._getInitialCards(),
  //   ])
  //     .then(([userData, initialCards]) => {
  //       setInitialUserInfo(userData);
  //       callbackForRenderInitialCards(initialCards);
  //     })
  //     .catch((err) => {
  //       this._renderError(`Ошибка: ${err}`);
  //     }); 
  // }

  // editUserInfo(userInfoObj, setUserInfoFromApi, submitBtn, editProfilePopup) {
  //   fetch(`${this._baseUrl}/users/me`, {
  //   method: 'PATCH',
  //   headers: {
  //     authorization: this._authorization,
  //     'Content-Type': this._contentType
  //     },
  //     body: JSON.stringify(userInfoObj)
  //   })
  //   .then(this._handleOriginalResponse)
  //   .then((res) => {
  //   setUserInfoFromApi(res);
  //   })
  //   .catch((err) => {
  //     this._renderError(`Ошибка: ${err}`);
  //   })
  //   .finally(this._renderLoading(false, submitBtn, editProfilePopup));
  // }

  // editAvatar(avatarLink, setAvatarFromApi, submitBtn, editAvatarPopup) {
  //   fetch(`${this._baseUrl}/users/me/avatar`, {
  //   method: 'PATCH',
  //   headers: {
  //     authorization: this._authorization,
  //     'Content-Type': this._contentType
  //     },
  //     body: JSON.stringify(avatarLink)
  //   })
  //   .then(this._handleOriginalResponse)
  //   .then((res) => {
  //     setAvatarFromApi(res);
  //   })
  //   .catch((err) => {
  //     this._renderError(`Ошибка: ${err}`);
  //   })
  //   .finally(this._renderLoading(false, submitBtn, editAvatarPopup));
  // }

  // addNewCard(cardInfo, createNewCardFromApi, submitBtn, addCardPopup) {
  //   fetch(`${this._baseUrl}/cards`, {
  //     method: 'POST',
  //     headers: {
  //       authorization: this._authorization,
  //       'Content-Type': this._contentType
  //       },
  //     body: JSON.stringify(cardInfo)
  //   })
  //   .then(this._handleOriginalResponse)
  //   .then((res) => {
  //     createNewCardFromApi(res);
  //   })
  //   .catch((err) => {
  //     this._renderError(`Ошибка: ${err}`);
  //   })
  //   .finally(this._renderLoading(false, submitBtn, addCardPopup));
  // }

  // getCardData(cardId, cardElement) {
  //   this._cardId = cardId;
  //   this._cardElement = cardElement;
  // }

  // deleteCard(closeConfirmPopup) {
  //   fetch(`${this._baseUrl}/cards/${this._cardId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: this._authorization
  //       }
  //   })
  //   .then(this._handleOriginalResponse)
  //   .then((res) => {
  //     console.log(res);
  //     this._cardElement.remove();
  //   })
  //   .catch((err) => {
  //     this._renderError(`Ошибка: ${err}`);
  //   })
  //   .finally(closeConfirmPopup);
  // }

  // putCardLike() {
  //   return fetch(`${this._baseUrl}/cards/likes/${this._cardId}`, {
  //     method: 'PUT',
  //     headers: {
  //       authorization: this._authorization
  //       }
  //   })
  //   .then(this._handleOriginalResponse);
  // }

  // deleteCardLike() {
  //   return fetch(`${this._baseUrl}/cards/likes/${this._cardId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: this._authorization
  //       }
  //   })
  //   .then(this._handleOriginalResponse);
  // }
  
}

const api = new Api(
  apiSettings, 
  function renderError(err) {
    console.log(err);
  //   errorText.textContent = err;
  //   errorAlertPopup.openPopup();
  }, 
  // function renderLoading(isLoading, submitBtn, popupType) {
  //   if (isLoading) {
  //     submitBtn.value = 'Сохранение...';
  //   } else {
  //     popupType.closePopup();
  //   }
  // }
  );

export default api;  



 
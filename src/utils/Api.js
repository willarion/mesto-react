import {apiSettings} from './constants'

class Api {
  
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._authorization = options.headers.authorization; 
    this._contentType = options.headers["Content-Type"];
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

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      //putCardLike

      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: this._authorization
          }
      })
      .then(this._handleOriginalResponse);
    }
    else {
      //deleteCardLike

      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorization
          }
      })
      .then(this._handleOriginalResponse);
    }
  }

  deleteCard(cardId) {
    fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
        }
    })
    .then(this._handleOriginalResponse);
  }

}

const api = new Api(apiSettings);

export default api;  



 
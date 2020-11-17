import React from 'react'; 
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';




function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    const userInfo = api.getUserInfo();
    
    userInfo
    .then((infoObj) => {
      
      setCurrentUser(infoObj);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    },
    [] // вызовется только один раз при монтировании компонента
  );


  const [isEditProfilePopupOpen, changeEditProfilePopupState] = React.useState(false);
  
  const [isEditAvatarPopupOpen, changeEditAvatarPopupState] = React.useState(false);

  const [isAddPlacePopupOpen, changeAddPlacePopupState] = React.useState(false);

  const emptySelectedCard = 
    {
      link: '#',
      name: ''
    }
  const [selectedCard, setSelectedCard] = React.useState(emptySelectedCard);
  const [isSelectedCardOpen, changeSelectedCardState] = React.useState(false);


  function handleEditProfileClick() {
    changeEditProfilePopupState(true);
  }
  
  function handleEditAvatarClick() {
    changeEditAvatarPopupState(true);
  }
  
  function handleAddPlaceClick() {
    changeAddPlacePopupState(true);
  }

  function handleCardClick(data) {
    setSelectedCard(data);
    changeSelectedCardState(true);
  }

  function closeAllPopups() {
    changeEditProfilePopupState(false);
    changeEditAvatarPopupState(false);
    changeAddPlacePopupState(false);
    setSelectedCard(emptySelectedCard);
    changeSelectedCardState(false);
  }

  function handleUpdateUser(userInfoObj) {
    api.setUserInfo(userInfoObj)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(
      closeAllPopups()
    )

  }

  function handleUpdateAvatar(avatarInfoObj) {
    api.setUserAvatar(avatarInfoObj)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(
      closeAllPopups()
    )

  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onEditAvatar={handleEditAvatarClick} 
          onAddPlace={handleAddPlaceClick} 
          onCardClick={handleCardClick}
        />
        <Footer />  
      </div>

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} /> 
    
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

      <PopupWithForm modalName="type_add-card" formName="add-card-form" title="Новое место" buttonValue="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="modal__input-field">
          <input type="text" name="title" placeholder="Название" className="modal__place-title modal__input-line" id="input-place-title" required minLength="1" maxLength="30" />
          <span className="modal__error" id="input-place-title-error"></span>
        </label>
        <label className="modal__input-field">
          <input type="url" name="link" placeholder="Ссылка на картинку" className="modal__image-url modal__input-line" id="input-image-url" required />
          <span className="modal__error" id="input-image-url-error"></span>
        </label>
      </PopupWithForm>  
      
      <PopupWithForm modalName="type_delete-confirm" formName="delete-confirm-form" title="Вы уверены?" buttonValue="Да" onClose={closeAllPopups} />  

      <ImagePopup card={selectedCard} isOpen={isSelectedCardOpen} onClose={closeAllPopups} />
   
    </CurrentUserContext.Provider>
  );
}

export default App;

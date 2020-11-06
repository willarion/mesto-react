import React from 'react'; 
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';




function App() {

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


  return (
    <>
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

      <PopupWithForm modalName="type_edit-profile" formName="edit-profile-form" title="Редактировать профиль" buttonValue="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="modal__input-field">
            <input type="text" name="name" placeholder="Имя" className="modal__name modal__input-line" id="input-name" required minLength="2" maxLength="40" />
            <span className="modal__error" id="input-name-error"></span>
        </label>
        <label className="modal__input-field">
            <input type="text" name="about" placeholder="О вас" className="modal__bio modal__input-line" id="input-bio" required minLength="2" maxLength="200" />
            <span className="modal__error" id="input-bio-error"></span>
        </label>
      </PopupWithForm>
    
      <PopupWithForm modalName="type_edit-avatar" formName="edit-avatar-form" title="Обновить аватар" buttonValue="Сохранить" isOpen={isEditAvatarPopupOpen}>
        <label className="modal__input-field">
          <input type="url" name="avatar" placeholder="Ссылка на аватар" className="modal__avatar-url modal__input-line" id="input-avatar-url" required />
          <span className="modal__error" id="input-avatar-url-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm modalName="type_add-card" formName="add-card-form" title="Новое место" buttonValue="Создать" isOpen={isAddPlacePopupOpen}>
        <label className="modal__input-field">
          <input type="text" name="title" placeholder="Название" className="modal__place-title modal__input-line" id="input-place-title" required minLength="1" maxLength="30" />
          <span className="modal__error" id="input-place-title-error"></span>
        </label>
        <label className="modal__input-field">
          <input type="url" name="link" placeholder="Ссылка на картинку" className="modal__image-url modal__input-line" id="input-image-url" required />
          <span className="modal__error" id="input-image-url-error"></span>
        </label>
      </PopupWithForm>  
      
      <PopupWithForm modalName="type_delete-confirm" formName="delete-confirm-form" title="Вы уверены?" buttonValue="Да" />  

      <ImagePopup card={selectedCard} isOpen={isSelectedCardOpen} onClose={closeAllPopups} />
   
    </>
  );
}

export default App;

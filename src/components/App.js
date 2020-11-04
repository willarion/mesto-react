import React from 'react'; 
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';



function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        
      </div>

    <div className="modal modal_type_edit-profile">
      <form action="#" className="modal__container modal__edit-profile-form" noValidate>
        <button type="reset" className="modal__reset-btn"></button>
        <fieldset className="modal__info-input">
          <legend className="modal__title">Редактировать профиль</legend>
            <label className="modal__input-field">
              <input type="text" name="name" placeholder="Имя" className="modal__name modal__input-line" id="input-name" required minLength="2" maxLength="40" />
              <span className="modal__error" id="input-name-error"></span>
            </label>
            <label className="modal__input-field">
              <input type="text" name="about" placeholder="О вас" className="modal__bio modal__input-line" id="input-bio" required minLength="2" maxLength="200" />
              <span className="modal__error" id="input-bio-error"></span>
            </label>
        </fieldset>
        <input type="submit" className="modal__save-btn" value="Сохранить" disabled />
      </form>
    </div>

    <div className="modal modal_type_edit-avatar">
      <form action="#" className="modal__container modal__container_type_edit-avatar modal__edit-avatar-form" noValidate>
        <button type="reset" className="modal__reset-btn"></button>
        <fieldset className="modal__info-input">
          <legend className="modal__title">Обновить аватар</legend>
            <label className="modal__input-field">
              <input type="url" name="avatar" placeholder="Ссылка на аватар" className="modal__avatar-url modal__input-line" id="input-avatar-url" required />
              <span className="modal__error" id="input-avatar-url-error"></span>
            </label>
        </fieldset>
        <input type="submit" className="modal__save-btn" value="Сохранить" disabled />
      </form>
    </div>

    <div className="modal modal_type_add-card">
      <form action="#" className="modal__container modal__add-card-form" noValidate>
        <button type="reset" className="modal__reset-btn"></button>
        <fieldset className="modal__info-input">
          <legend className="modal__title">Новое место</legend>
            <label className="modal__input-field">
              <input type="text" name="title" placeholder="Название" className="modal__place-title modal__input-line" id="input-place-title" required minLength="1" maxLength="30" />
              <span className="modal__error" id="input-place-title-error"></span>
            </label>
            <label className="modal__input-field">
              <input type="url" name="link" placeholder="Ссылка на картинку" className="modal__image-url modal__input-line" id="input-image-url" required />
              <span className="modal__error" id="input-image-url-error"></span>
            </label>
        </fieldset>
        <input type="submit" className="modal__save-btn" value="Создать" disabled />
      </form>
    </div>

    <div className="modal modal_type_big-image">
      <figure className="modal__figure">
        <button type="reset" className="modal__reset-btn"></button>
        <img src="#" alt="" className="modal__image" />
        <figcaption className="modal__caption"></figcaption>
      </figure>
    </div>

    <div className="modal modal_type_delete-confirm">
      <div className="modal__container modal__container_size_xs">
        <button type="reset" className="modal__reset-btn"></button>
          <p className="modal__title">Вы уверены?</p>
        <input type="submit" className="modal__save-btn modal__save-btn_size_xs" value="Да" />
      </div>
    </div>

    <div className="modal modal_type_error-alert">
      <div className="modal__container modal__container_size_xs">
        <button type="reset" className="modal__reset-btn"></button>
          <p className="modal__title">Произошла ошибка</p>
      </div>
    </div>

    <template className="card-template">
      <li className="card-element">
        <div className="element">
          <button type="button" className="element__delete-btn"></button>
          <img src="#" alt="" className="element__image" />
          <div className="element__caption">
            <p className="element__text"></p>
            <div className="element__like-display">
              <button type="submit" className="element__like"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
        </div>
      </li>
    </template>
    </>
  );
}

export default App;

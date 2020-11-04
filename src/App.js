import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <div className="header__logo"></div>
        </header>

        <main>
          <section className="profile">
            <div className="profile__description">
              <button className="profile__edit-avatar-btn">
                <div className="profile__edit-btn-overlay"></div>
                <img src="#" alt="аватар" className="profile__avatar" />
              </button>
              <div className="profile__info">
                <h1 className="profile__name"></h1>
                <p className="profile__bio"></p>
                <button type="button" className="profile__edit-btn"></button>
              </div>
            </div>
            <button type="button" className="profile__add-btn"></button>
          </section>

          <section className="elements">
            <ul className="elements__list">
            </ul>
          </section>

        </main>
        <footer className="footer">
          <p className="footer__text">&#169; 2020 Mesto Russia</p>
        </footer>
      </div>

    <div className="modal modal_type_edit-profile">
      <form action="#" className="modal__container modal__edit-profile-form" novalidate>
        <button type="reset" className="modal__reset-btn"></button>
        <fieldset className="modal__info-input">
          <legend className="modal__title">Редактировать профиль</legend>
            <label className="modal__input-field">
              <input type="text" name="name" placeholder="Имя" className="modal__name modal__input-line" id="input-name" required minlength="2" maxlength="40" />
              <span className="modal__error" id="input-name-error"></span>
            </label>
            <label className="modal__input-field">
              <input type="text" name="about" placeholder="О вас" className="modal__bio modal__input-line" id="input-bio" required minlength="2" maxlength="200" />
              <span className="modal__error" id="input-bio-error"></span>
            </label>
        </fieldset>
        <input type="submit" className="modal__save-btn" value="Сохранить" disabled />
      </form>
    </div>

    <div className="modal modal_type_edit-avatar">
      <form action="#" className="modal__container modal__container_type_edit-avatar modal__edit-avatar-form" novalidate>
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
      <form action="#" className="modal__container modal__add-card-form" novalidate>
        <button type="reset" className="modal__reset-btn"></button>
        <fieldset className="modal__info-input">
          <legend className="modal__title">Новое место</legend>
            <label className="modal__input-field">
              <input type="text" name="title" placeholder="Название" className="modal__place-title modal__input-line" id="input-place-title" required minlength="1" maxlength="30" />
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
    </div>
  );
}

export default App;

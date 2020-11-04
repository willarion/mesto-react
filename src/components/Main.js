import React from 'react';



function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__description">
          <button className="profile__edit-avatar-btn" onClick={props.onEditAvatar}>
            <div className="profile__edit-btn-overlay"></div>
            <img src="#" alt="аватар" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <p className="profile__bio"></p>
            <button type="button" className="profile__edit-btn" onClick={props.onEditProfile}></button>
          </div>
        </div>
        <button type="button" className="profile__add-btn" onClick={props.onAddPlace }></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  )
}

export default Main;
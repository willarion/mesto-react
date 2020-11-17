import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {

  //данные пользователя
  const currentUser = React.useContext(CurrentUserContext);

  // карточки
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
   
    api.getInitialCards()
    .then((cardsArray) => {
      setCards(cardsArray);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    },
    [] // вызовется только один раз при монтировании компонента
  );

  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      
      setCards(newCards);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then((res) => {
      const newCards = cards.filter((c) => c._id !== card._id);

      setCards(newCards);
    })
    .catch((err) => {
      console.log(err);
    });
  }


  return (
    <main>
      <section className="profile">
        <div className="profile__description">
          <button className="profile__edit-avatar-btn" onClick={props.onEditAvatar}>
            <div className="profile__edit-btn-overlay"></div>
            <img src={currentUser.avatar} alt="аватар" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__bio">{currentUser.about}</p>
            <button type="button" className="profile__edit-btn" onClick={props.onEditProfile} />
          </div>
        </div>
        <button type="button" className="profile__add-btn" onClick={props.onAddPlace} />
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card onCardDelete={handleCardDelete} onCardLike={handleCardLike} card={card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;
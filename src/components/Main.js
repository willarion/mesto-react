import React from 'react';
import api from '../utils/Api';
import Card from './Card';


function Main(props) {
  // данные пользователя
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    const userInfo = api.getUserInfo();
    
    userInfo
    .then((infoObj) => {
      
      setUserName(infoObj.name);
      setUserDescription(infoObj.about);
      setUserAvatar(infoObj.avatar);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    },
    [] // вызовется только один раз при монтировании компонента
  );
  

  // карточки
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    const cards = api.getInitialCards();
    
    cards
    .then((cardsArray) => {
      setCards(cardsArray);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    },
    [] // вызовется только один раз при монтировании компонента
  );



  return (
    <main>
      <section className="profile">
        <div className="profile__description">
          <button className="profile__edit-avatar-btn" onClick={props.onEditAvatar}>
            <div className="profile__edit-btn-overlay"></div>
            <img src={userAvatar} alt="аватар" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__bio">{userDescription}</p>
            <button type="button" className="profile__edit-btn" onClick={props.onEditProfile}></button>
          </div>
        </div>
        <button type="button" className="profile__add-btn" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;
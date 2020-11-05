import React from 'react';


function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="card-element">
      <div className="element">
        <button type="button" className="element__delete-btn"></button>
        <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick} />
        <div className="element__caption">
          <p className="element__text">{props.card.name} </p>
          <div className="element__like-display">
            <button type="submit" className="element__like"></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
    </li>
  )
} 


export default Card;
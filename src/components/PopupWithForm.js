import React from 'react';


function PopupWithForm(props) {
  return (
    <div className={`modal modal_${props.modalName}`}>
      <form action="#" className={`modal__container modal__${props.formName}`} noValidate>
        <button type="reset" className="modal__reset-btn"></button>
        <fieldset className="modal__info-input">
          <legend className="modal__title">{props.title}</legend>
          {props.children}  
        </fieldset>
        <input type="submit" className="modal__save-btn" value={props.buttonValue} disabled />
      </form>
    </div>
  )
}

export default PopupWithForm;
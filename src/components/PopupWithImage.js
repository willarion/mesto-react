import React from 'react';


function PopupWithImage() {
  return (
    <div className="modal modal_type_big-image">
      <figure className="modal__figure">
        <button type="reset" className="modal__reset-btn"></button>
        <img src="#" alt="" className="modal__image" />
        <figcaption className="modal__caption"></figcaption>
      </figure>
    </div>
  )
}

export default PopupWithImage;
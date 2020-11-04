import React from 'react';


function PopupWithError() {
  return (
    <div className="modal modal_type_error-alert">
      <div className="modal__container modal__container_size_xs">
        <button type="reset" className="modal__reset-btn"></button>
          <p className="modal__title">Произошла ошибка</p>
      </div>
    </div>
  )
}

export default PopupWithError;
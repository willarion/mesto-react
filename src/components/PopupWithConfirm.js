import React from 'react';


function PopupWithConfirm() {
  return (
    <div className="modal modal_type_delete-confirm">
      <div className="modal__container modal__container_size_xs">
        <button type="reset" className="modal__reset-btn" />
          <p className="modal__title">Вы уверены?</p>
        <input type="submit" className="modal__save-btn modal__save-btn_size_xs" value="Да" />
      </div>
    </div>
  )
}

export default PopupWithConfirm;
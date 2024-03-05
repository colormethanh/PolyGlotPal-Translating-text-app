// Thanks to https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
// for this Modal guide
import React, { useState, useEffect, useRef } from 'react';
import './settingsModal.css';
import Modal from './modal/Modal';


function SettingsModal({onSubmit, isOpen, onClose, languageSettings, setLanguageSettings}) {
  const focusInputRef = useRef(null);

  useEffect(() => {
    if(isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);
  
  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit} id='language-settings-form'>
        <div className='form-row'>
          <h1> Language Settings </h1>
        </div>

        <div className='form-row'>
          <label>
            Input Language: 
            <select name='inputLangSelect' multiple={false} defaultValue={languageSettings.inputLang}>
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              <option value="es">Spanish</option>
            </select>
          </label>
        </div>

        <div className='form-row'>
          <label >
            Output Language: 
            <select name='outputLangSelect' multiple={false} defaultValue={languageSettings.outputLang}>
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              <option value="es">Spanish</option>
            </select>
          </label>
        </div>
        
        <div className='form-row'>
          <button type='submit'> Submit settings </button>
        </div>
      </form>
    </Modal>
  )
}

export default SettingsModal
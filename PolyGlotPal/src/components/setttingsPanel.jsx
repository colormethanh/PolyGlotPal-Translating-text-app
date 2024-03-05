import './settingsPanel.css';
import gearsIcon from "../assets/icons/gears-icon.png";
import { useEffect, useState } from 'react';
import SettingsModal from './settingsModal';


function SettingsPanel({languageSettings, setLanguageSettings}){

  let [panelIsOpen, setPanelState] = useState(false);
  let [panelClass, setPanelClass] = useState("settings-closed");
  let [isModalOpen, setModalOpen] = useState(false);
  
  function handleOpenModal(){
    setModalOpen(true);
  }
  function handleCloseModal(){
    setModalOpen(false);
  }

  function toggleSettings() {
    if (panelIsOpen === true){
      setPanelClass("settings-closed")
      setPanelState(false)
    } else {
      setPanelClass("settings-opened")
      setPanelState(true)
    } 
  }

  function onSettingClick(setting){
    console.log(`setting button clicked for ${setting}`);
    handleOpenModal();
  }

  function onSubmit(event){
    event.preventDefault();
    console.log("form submitted");
    let formData = new FormData(event.target)
    let formJson = Object.fromEntries(formData.entries());
    console.log(formJson)
    let newOutputLang = formJson.outputLangSelect
    let newInputLang = formJson.inputLangSelect
    setLanguageSettings((prevState) => {
      return {
        inputLang: newInputLang, 
        outputLang: newOutputLang
      }
    })
    handleCloseModal();
  }

  return (
    <>
    <div id="settings">
        <div className={panelClass} id="settings-panel-container">
          <div className='setting-wrapper' onClick={() => onSettingClick('inputLang')}> Language settings </div>
        </div>
        <img onClick={toggleSettings} src={gearsIcon} alt='Settings Icon' id='settingsImage'/>
        <div id='language-display'>
          <p className='language-display-text'> Input Language: {languageSettings.inputLang} </p>
          <p className='language-display-text'> Output Language: {languageSettings.outputLang} </p>
        </div>
        <div className='block'></div>
    </div>
    <SettingsModal
      onSubmit={onSubmit} 
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      languageSettings={languageSettings}
      setLanguageSettings={setLanguageSettings}
    />
    </>
  )
}

export default SettingsPanel
import './navBar.css';
import SettingsPanel from './setttingsPanel';


function NavBar({languageSettings, setLanguageSettings}){


  

  return (
    <nav id='navbar'>
      <SettingsPanel languageSettings={languageSettings} setLanguageSettings={setLanguageSettings} />
      <h1 id='title'> PolyPal </h1>
    </nav>
  )
}

export default NavBar;
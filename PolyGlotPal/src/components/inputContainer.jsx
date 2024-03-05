import { useState } from "react";
import "./inputContainer.css"


function InputContainer(props){
  const [inputTxt, setInputText] = useState("")
  
  // Message formats...
  // {type: 'received'/'send', text:'hello 9'}
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputTxt !== "") {
      console.log(inputTxt);
      // let message = {type: 'sent', text: inputTxt};
      // let translatedMessage = {type: 'received', text: inputTxt};
      props.addMessage(inputTxt);
      props.translateMessage(inputTxt);
    }
    setInputText("");
  }


  return (
    <>
      <div id="input-container">
        <form id="chat-input-form" onSubmit={onSubmit}>
            <input 
              type="text" 
              onChange={(e) => {setInputText(e.target.value)}}
              name='text-input'
              value={inputTxt}
              placeholder="Enter text here"
              />
        </form> 
      </div>
      
    </>
  )
}

export default InputContainer
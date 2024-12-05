import { useState } from "react";
import axios from "axios";
import "./App.css";

import MessagesContainer from "./components/messagesContainer";
import InputContainer from "./components/inputContainer";
import NavBar from "./components/navBar";

const languageCodes = {
  ja: "Japanese",
  en: "English",
  es: "Spanish",
  vi: "vietnamese",
};

function App() {
  const [languageSettings, setLanguageSettings] = useState({
    inputLang: "en",
    outputLang: "ja",
  });
  const [messages, setMessages] = useState([
    {
      type: "received",
      text: `Hello There, type something and I will do my best to translate it.`,
    },
  ]);

  function addMessage(text, type = "sent") {
    // add our own message
    let message = { type: type, text: text };

    setMessages((prevMessages) => {
      return [...prevMessages, message];
    });
  }

  async function translateMessage(text) {
    // API link
    // https://rapidapi.com/translated/api/mymemory-translation-memory/
    const options = {
      method: "GET",
      url: "https://translated-mymemory---translation-memory.p.rapidapi.com/get",
      params: {
        langpair: `${languageSettings.inputLang}|${languageSettings.outputLang}`,
        q: text,
        mt: "1",
        onlyprivate: "0",
        de: "a@b.c",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data.responseData.translatedText);
      addMessage(response.data.responseData.translatedText, "received");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="app-container">
      <NavBar
        languageSettings={languageSettings}
        setLanguageSettings={setLanguageSettings}
      />
      <div id="chat-box">
        <MessagesContainer messages={messages} />
        <InputContainer
          addMessage={addMessage}
          translateMessage={translateMessage}
        />
      </div>
    </div>
  );
}

export default App;

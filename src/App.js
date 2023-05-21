import { useState } from "react";

import { Navbar } from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
 
function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  // 042743
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#6A0DAD'
      showAlert("DarkMode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("LightMode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;

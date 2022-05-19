import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/inputField/InputField";
import Lists from "./components/Lists/Lists";

function App() {
  const [arr, setArr] = useState([]);
  const [showArr, setShowArr] = useState([]);
  useEffect(() => {
    setShowArr([...arr]);
  }, [arr]);
  return (
    <div className="App">
      <h1>To-do App</h1>
      <InputField
        arr={arr}
        setArr={setArr}
        showArr={showArr}
        setShowArr={setShowArr}
      />
      <Lists
        showArr={showArr}
        setShowArr={setShowArr}
        arr={arr}
        setArr={setArr}
      />
    </div>
  );
}

export default App;

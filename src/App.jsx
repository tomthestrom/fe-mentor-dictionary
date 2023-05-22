import { useState } from "react";
import ControlHub from "./components/controlhub/ControlHub";
import Search from "./components/search/Search";

//import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ControlHub/>
      <Search/>
    </>
  );
}

export default App;

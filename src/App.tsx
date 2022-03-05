import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

function App() {
  const [update, setUpdate] = useState(false)
  return (
    <>
      <Header closeModa={() => setUpdate(!update)}/>
      <Dashboard update={update}/>
      <GlobalStyle />
    </>
  );
}

export default App;

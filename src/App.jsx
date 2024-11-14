import "./App.css";
import MenuPrincipal from "./components/MenuPrincipal";
import Challenge from "./components/Challenge";
import { useState } from "react";

function App() {
  const [btnStart, setBtnStart] = useState(true);

  const goChallenge = (e, gerarChallenge, gerarChallenge2) => {
    e.preventDefault();

    setBtnStart(!btnStart);

    if (gerarChallenge) {
      gerarChallenge();
      gerarChallenge2();
    }
  };

  return (
    <div className="App">
      {btnStart ? (
        <div className="container">
          <MenuPrincipal onClick={goChallenge} />
        </div>
      ) : (
        <div className="challenge">
          <Challenge goChallenge={goChallenge} />
        </div>
      )}
    </div>
  );
}

export default App;

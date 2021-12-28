import Conversor from "./componentes/conversor";
function App() {
  return (
    <div className="App">
      <div className="row">
        <Conversor moeda1="USD" moeda2="BRL"></Conversor>
        <Conversor moeda1="BRL" moeda2="USD"></Conversor>
      </div>
    </div>
  );
}

export default App;

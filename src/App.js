import Encabezado from "./components/Encabezado";
import Lista from "./components/Lista";

const App = () => {
  return (
    <div className="container">
      <Encabezado/>
      <ul>
        <Lista thing = "Learn React"/>
        <Lista thing = "Climb Mt. Everest"/>
        <Lista thing = "Run a marrathon"/>
        <Lista thing = "Feed the dogs"/>
      </ul>
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";
import Themes from "./themes.json";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ListGroup themes={Themes} heading={"Themes"}/>
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";
import Themes from "./themes.json";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <ListGroup themes={Themes} heading={"Themes"}/>
    </div>
  );
}

import ThemeList from "./components/Themes";
import Themes from "./themes.json";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <ThemeList themes={Themes} heading={"Themes"}/>
    </div>
  );
}

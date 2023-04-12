import './App.css';
import {useState} from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";



function App() {
  const [theme, setTheme] = useState("light");


  function selectTheme() {
    switch(theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        setTheme("light");
        break;
    }
  }

  // Note that the classname is in {} because we need to break out to JS
  return (
    <div className={"App " + theme}>
      <Header switchTheme={selectTheme} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import {useState} from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";


function App() {
  const [theme, setTheme] = useState("light");
  //const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  function presentModal(data) {
    if(data === false || data == null || (data === undefined)) {
      //setDisplayModal(false);
      setModalData(null);
    }
    else {
      setModalData(data);
      //setDisplayModal(true);
    }
    //setDisplayModal(!displayModal);
  }

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
      <Main presentModal={presentModal}/>
      <Footer />
      {(modalData !== null) && <Modal presentModal={presentModal} beast={modalData} />}
    </div>
  );
}

export default App;

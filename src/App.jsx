import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Persona from "./components/Persona";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Notizie from "./components/Notizie";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/persona/:id" element={<Persona />} />
          <Route path="/Notizie" element={<Notizie />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;

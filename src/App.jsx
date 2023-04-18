import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Persona from "./components/Persona";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/persona/:id" element={<Persona />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Persona from "./components/Persona";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import ExperienceForm from "./components/ExperienceForm";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/persona/:id" element={<Persona />} />
          <Route path="/addExperience" element={<ExperienceForm />} />
          <Route path="/homePage" element={<Home />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;

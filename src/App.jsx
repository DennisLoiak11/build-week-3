import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
    <BrowserRouter>
      <MyNav/>
          <Routes>
            <Route/>
            <Route/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

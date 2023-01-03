import NavBar from "./NavBar/NavaBar";
import { Routes, Route } from "react-router-dom";
import ChiffreCles from "./Pages/ChiffreCles";
import Actualites from "./Pages/Actualites";
import About from "./Pages/About";
import Error from "./Pages/Error";
import SituationLocales from "./Pages/SituationLocales";
function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ChiffreCles />}></Route>
        <Route path="/" element={<Actualites />}></Route>
        <Route path="/ " element={<SituationLocales />}></Route>
        <Route path="/" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;

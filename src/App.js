import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.Js";


function App() {
  return (
    <div>

    <Navbar></Navbar>

    <Routes>
        <Route path="/" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>

    </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
import Error from "./Pages/PageNotFound/Error";


function App() {
  return (
    <div>

    <Navbar></Navbar>

    <Routes>
        <Route path="/" element={<About></About>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
    </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/loyout";
import Home from "./components/main/home";
import Contect from "./components/main/contect";
import Shoptoli from "./components/main/shoptoli";
import Mator from "./components/main/mator";
import Elektr from "./components/main/elektr";
import Trans from "./components/main/trans";
import Hadavoy from "./components/main/hadavoy";
import About from "./components/main/about";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contect" element={<Contect />} />
            <Route path="/shoptoli" element={<Shoptoli />} />
            <Route path="/mator" element={<Mator />} />
            <Route path="/elektr" element={<Elektr />} />
            <Route path="/hadavoy" element={<Hadavoy />} />
            <Route path="/trans" element={<Trans />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

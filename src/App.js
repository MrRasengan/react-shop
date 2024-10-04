import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import Basket from "./components/basket/Basket";
import Catalog from "./components/catalog/Catalog";
import Registr from "./components/registration/Registr";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;

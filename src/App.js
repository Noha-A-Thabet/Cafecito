import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu/Menu";
import OrderOnline from "./Components/OrderOnline/OrderOnline";
import Gallery from "./Components/Gallery/Gallery";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

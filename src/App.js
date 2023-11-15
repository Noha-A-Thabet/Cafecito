
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Components/Menu/Menu";
import OrderOnline from "./Components/OrderOnline/OrderOnline";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderOnline />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

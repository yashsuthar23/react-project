import "./App.css";
import HomePage from "./components/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";
import Men from "./components/Men/men";
import Cloth from "./components/c/cl";
import ContactPage from "./components/Call/call";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/men" element={<Men />} />
          <Route path="/call" element={<ContactPage />} /> 
          <Route exact path="/" element={<HomePage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

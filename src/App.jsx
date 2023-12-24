import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";
import { Cart } from "./components/Cart";

import "./App.css";
import { DetailsProduct } from "./pages/DetailsProduct";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="NUESTRA CARTA"/>} />
          <Route path="/category/:id" element={<ItemListContainer greeting="NUESTRA CARTA"/>} />
          <Route path="/items/:id" element={<DetailsProduct />} />
          <Route path="/cart" element ={<Cart/>}/>
          <Route path="*" element={<Error404></Error404>} />
          <Route path="*/*" element={<Error404></Error404>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App

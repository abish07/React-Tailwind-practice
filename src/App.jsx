import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./GameContext";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";

function App(){
    return (
        <BrowserRouter>
            <GameProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </GameProvider>
        </BrowserRouter>
    );
}
export default App;
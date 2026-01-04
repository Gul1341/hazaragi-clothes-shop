// Import global CSS file for the App component
import "./App.css";

// Import Bootstrap CSS for styling and responsive layout
import "bootstrap/dist/css/bootstrap.min.css";

// Import React Router components for page navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Nav from "./components/nav";

// Import reusable components
import { ShopContextProvider } from "./context/shopContext";

// Main App component
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

// Export App component so it can be used in index.js/main.jsx
export default App;

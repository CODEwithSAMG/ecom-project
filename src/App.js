import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ContactUs from "./ContactUs";
import Context from "./context/Context";

function App() {
  return (
    <>
      <Navbar />
      <div className="parent">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/content" element={<ContactUs />} />
          <Route
            className="product-container"
            exact
            path="/product"
            element={<Product />}
          />
        </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;

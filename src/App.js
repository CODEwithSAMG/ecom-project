import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="parent"> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            className="product-container"

            path="/product"
            element={<Product />}
          />
        </Routes>
      {/* </div> */}
      <Footer />

    </>
  );
}

export default App;

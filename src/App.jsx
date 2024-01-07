import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products"
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Helmet>
          <script src="src/assets/js/owl.js"></script>
        </Helmet> */}
        <div className="boxed_wrapper ltr">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="products" element={<Products />} />
            <Route path = "Blog" element={<Blog/>}/>

          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navmenu from "./components/navmenu/Navmenu";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { useEffect } from "react";
import "./responsive.css";
import CanadaPrVisa from "./pages/immigration/CanadaPrVisa";
import Canadaentry from "./pages/immigration/Canadaentry";
import AustraliaVisa189 from "./pages/immigration/AustraliaVisa189";
import Australia190 from "./pages/immigration/Australia190";
import Australia491 from "./pages/immigration/Australia491";
import Austria from "./pages/immigration/Austria";
import AustraliaNominated from "./pages/immigration/AustraliaNominated";
import HongKong from "./pages/immigration/HongKong";
import Germany from "./pages/immigration/Germany";
import Dubaivisa from "./pages/immigration/Dubaivisa";
import Singapore from "./pages/immigration/Singapore";
import Sweden from "./pages/immigration/Sweden";
import UkprVisa from "./pages/immigration/UkprVisa";
import USA from "./pages/immigration/USA";

function App() {
  const Notfound = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/home");
    }, [navigate]); // Add 'navigate' as a dependency
  };

  return (
    <>
      <BrowserRouter>
        <Navmenu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/canadapr" element={<CanadaPrVisa />} />
          <Route path="/canada-entry" element={<Canadaentry />} />
          <Route path="/Australia189" element={<AustraliaVisa189 />} />
          <Route path="/Australia491" element={<Australia491 />} />
          <Route path="/AustraliaNominated" element={<AustraliaNominated />} />
          <Route path="/Austria" element={<Austria />} />
          <Route path="/Australia190" element={<Australia190 />} />
          <Route path="/Dubaivisa" element={<Dubaivisa />} />
          <Route path="/Germany" element={<Germany />} />
          <Route path="/HongKong" element={<HongKong />} />
          <Route path="/Singapore" element={<Singapore />} />
          <Route path="/Sweden" element={<Sweden />} />
          <Route path="/UkprVisa" element={<UkprVisa />} />
          <Route path="/USA" element={<USA />} />
          <Route path="/Australia189" element={<AustraliaVisa189 />} />
          <Route path="/Australia189" element={<AustraliaVisa189 />} />
          <Route path="/" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

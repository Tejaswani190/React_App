import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import GetApp from "./components/GetApp";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Menu />
      <GetApp />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;

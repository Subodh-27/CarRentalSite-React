import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Testimonial from "./components/Testimonials/Testimonial";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])

  // AOS Initialization
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
    </div>
  );
};

export default App;
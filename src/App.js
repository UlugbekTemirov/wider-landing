import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Benefits from "./sections/Benefits";
import Comments from "./sections/Comments";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Home from "./sections/Home";
import Partners from "./sections/Partners";
import Potential from "./sections/Potential";
import Subscribe from "./sections/Subscribe";

function App() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const element = document.querySelector(href);
        element.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home id="home" />
      <Features id="features" />
      <Potential id="potential" />
      <Benefits id="benefits" />
      <Faq id="faq" />
      <Subscribe id="subscribe" />
      <Comments id="comments" />
      <Partners id="partners" />
      <Footer />
    </>
  );
}

export default App;

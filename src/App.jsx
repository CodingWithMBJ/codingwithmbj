import React, { useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/animations.css";
import "./styles/desktop.css";
import "./styles/tablet.css";
import useTheme from "./hooks/useTheme";
import { useBreakpoint } from "./hooks/useBreakPoint";
import Header from "./components/Header";
import Hero from "./components/HeroCard";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ActionNav from "./components/ActionNav";

function App() {
  const [onScroll, setOnScroll] = useState(false);
  const { toggleTheme, darkTheme } = useTheme();
  const { isDesktop } = useBreakpoint();

  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return !isDesktop ? (
    <div id="wrapper" className="wrapper">
      {!isDesktop && (
        <ActionNav darkTheme={darkTheme} toggleTheme={toggleTheme} />
      )}

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  ) : (
    <div id="wrapper" className="wrapper">
      {isDesktop && (
        <Header
          toggleTheme={toggleTheme}
          darkTheme={darkTheme}
          isDesktop={isDesktop}
          onScroll={onScroll}
        />
      )}
      <main>
        <Hero />
        <About />
        <Blogs />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/animations.css";
import "./styles/desktop.css";
import "./styles/tablet.css";
import Header from "./components/Header";
import useTheme from "./hooks/useTheme";
import { useBreakpoint } from "./hooks/useBreakPoint";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const { toggleTheme, darkTheme } = useTheme();
  const { isDesktop } = useBreakpoint();

  const handleToggle = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div id="wrapper" className="wrapper">
      <Header
        toggleTheme={toggleTheme}
        darkTheme={darkTheme}
        isDesktop={isDesktop}
        handleToggle={handleToggle}
        showMenu={showMenu}
      />
      <Hero isDesktop={isDesktop} />
      <main className="main">
        <Routes>
          <Route path={`/`} element={<Home />} />
        </Routes>
        <NavBar isDesktop={isDesktop} />
      </main>
    </div>
  );
}

export default App;

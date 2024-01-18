import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Featured from "./sections/Featured.jsx";
import FindPet from "./sections/FindPet.jsx";
import Volunteer from "./sections/Volunteer.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <main className={darkMode ? "relative bg-[#121212]" : "relative"}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <Featured darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <FindPet darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <Volunteer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </section>

      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}

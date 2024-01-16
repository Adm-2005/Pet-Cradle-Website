import "./App.css";
import Nav from "./components/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Featured from "./sections/Featured.jsx";
import FindPet from "./sections/FindPet.jsx";
import Volunteer from "./sections/Volunteer.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <About />
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <Featured />
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <FindPet />
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <Volunteer />
      </section>

      <Footer />
    </main>
  );
}

import Navbar from "../componentes/Navbar";
import Hero from "../componentes/Hero";
import BlogImg from "../assets/catamarca.jpg";
import Footer from "../componentes/Footer";
import Trip from "../componentes/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".new-hero"
        heroImg={BlogImg}
        title="Blog"
        heroName="hero-overlay"
      />
      <Trip />

      <Footer />
    </>
  );
}

export default Home;

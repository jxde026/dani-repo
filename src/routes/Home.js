import Navbar from "../componentes/Navbar";
import Hero from "../componentes/Hero";
import Destination from "../componentes/Destination";
import Trip from "../componentes/Trip";
import Footer from "../componentes/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://c.pxhere.com/photos/cd/2a/bariloche_patagonia_water_lake_mouth_mountains_black_river_argentina-1075269.jpg!d"
        title="Descubrí la Argentina"
        text="Elegí tus proximas vacaciones"
        btnText="Travel Plan"
        url="#title1"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;

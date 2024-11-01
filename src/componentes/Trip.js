import "./TripStyles.css";
import TripData from "./TripData";
import Cata from "../assets/catamarca.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Destinos destacados</h1>
      <p>Estos son nuestros viajes favoritos</p>
      <div className="tripcard">
        <TripData
          image={Cata}
          heading="Coto de Lanús"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
        />
        <TripData
          image={Cata}
          heading="Coto de Lanús"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
        />
        <TripData
          image={Cata}
          heading="Coto de Lanús"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
        />
      </div>
    </div>
  );
}

export default Trip;
